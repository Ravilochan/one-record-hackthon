/**
 * Module dependencies.
 */
require("dotenv").config();
const express = require("express");
const compression = require("compression");
const cors = require("cors");
const logger = require("morgan");
const mongoose = require("mongoose");
const helmet = require("helmet");
const stripe = require("stripe")(
  "sk_test_51KpYA6DMTAJsEyJelj7WWKumHF3DB8JCCEMtGZbwup9HOATVFP6sGxutiGfWLgzGSrRYZm0IEvbXKW2BSJFnaEoV00ACcIXHKX"
);
const BookingModel = require("../src/model/Booking");

/**
 * Controllers
 */

/**
 * Constants
 */
const MONGODB_URI = process.env.MONGODB_URI;
const PORT = process.env.PORT;

/**
 * Create Express server.
 */
const app = express();

/**
 * Connect to MongoDB.
 */
mongoose.connect(MONGODB_URI).then(() => console.log("Connected to MongoDB"));
mongoose.connection.on("error", (err) => {
  console.error(err);
  console.log(
    "%s MongoDB connection error. Please make sure MongoDB is running."
  );
  process.exit();
});

/**
 * Express configuration.
 */
app.use(compression());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(helmet());

/**
 * Primary app routes.
 */

app.post("/create-payment-intent", async (req, res) => {
  const { price, values, email } = req.body;

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: price * 1000,
    currency: "usd",
    // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
    automatic_payment_methods: {
      enabled: true,
    },
  });

  const booking = new BookingModel({
    customer: values.name,
    iata_ref: values.iata,
    class_code: values.cass,
    no_of_pieces: values.noOfPieces,
    no_of_uld: values.noOfUld,
    weight: values.weight,
    volume: values.agentCassCode,
    origin: values.origin,
    destination: values.destination,
    commodity: values.commodityCode,
    product: values.productCode,
    shc: values.shc,
    airline: values.airline,
    flight: values.flight,
    price: values.price,
    pid: paymentIntent.client_secret,
  });
  await booking.save();

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});

/**
 * Error Handler.
 */
app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  res.status(404).send("Page Not Found");
});

app.use((err, req, res) => {
  console.log(err);
  res.status(500).send("Something went wrong");
});

/**
 * Start Express server.
 */
app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`);
  console.log("Press CTRL-C to stop.");
});

module.exports = app;
