const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const BookingSchema = new Schema(
  {
    id: ObjectId,
    customer: String,
    iata_ref: String,
    class_code: String,
    no_of_pieces: Number,
    no_of_uld: Number,
    weight: Number,
    volume: Number,
    origin: String,
    destination: String,
    commodity: String,
    product: String,
    shc: String,
    airline: String,
    flight: String,
    price: Number,
    pid: String,
    date: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Booking", BookingSchema);
