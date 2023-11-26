import React from "react";

// MUI Imports
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";

import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import Arrow from "/icons/arrow.svg";
import { TextField } from "@mui/material";
import Popup from "../../common/popup/Popup";
import CheckoutForm from "./CheckoutForm";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  "pk_test_51KpYA6DMTAJsEyJetHFho8dUtvGEl7A2KEWsgsmoRAj0WPNuwjoKaF7gV9LgaBM0UCMty6QwruUJzvPD7R748xKc00UU3a8wnM",
);

// Transition for Popup
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

export default function PaymentOption(props) {
  const { onClose, open, handleOpenReviewCOR, email, state, ...other } = props;
  const [clientSecret, setClientSecret] = React.useState("");

  const [openPopup, setOpenPopup] = React.useState(false);
  const handleOpenPopup = () => {
    setOpenPopup(true);
  };

  const handleClosePopup = () => {
    setOpenPopup(false);
  };

  // const options = {
  //   // passing the client secret obtained from the server
  //   clientSecret: 'sk_test_51KpYA6DMTAJsEyJelj7WWKumHF3DB8JCCEMtGZbwup9HOATVFP6sGxutiGfWLgzGSrRYZm0IEvbXKW2BSJFnaEoV00ACcIXHKX',
  // };

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  React.useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("http://localhost:3000/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ price: state.price, values: state, email: email }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  return (
    <React.Fragment>
      <Dialog
        sx={{ "& .MuiDialog-paper": { width: "100%" } }}
        maxWidth='md'
        open={open}
        TransitionComponent={Transition}
        {...other}
      >
        <DialogTitle>
          <div className='ModalPage__header'>
            <h1 className='ModalPage_main_title_fs'>Card Info</h1>
            <div
              className='ModalPage__close_icon'
              onClick={() => {
                onClose();
              }}
            >
              <i className='bx bx-x'></i>
            </div>
          </div>
        </DialogTitle>
        <DialogContent dividers>
          {clientSecret && (
            <Elements stripe={stripePromise} options={options}>
              <CheckoutForm state={state} email={email} />
            </Elements>
          )}
          {/* <div className='Input__table'>
            <div className='Input__section'>
              <div className='Input__grid'>
                <div className='Input__row '>
                  <div className='Input__column'>
                    <p className='Input__label_fs'>Card Number</p>
                    <TextField fullWidth placeholder='XXXX XXXX XXXX XXXX' />
                  </div>
                </div>
                <div className='Input__row two_column'>
                  <div className='Input__column'>
                    <p className='Input__label_fs'>Expiry Month / Year</p>
                    <TextField fullWidth placeholder='MM / YYYY' />
                  </div>
                  <div className='Input__column'>
                    <p className='Input__label_fs'>CVV</p>
                    <TextField fullWidth placeholder='XXX' />
                  </div>
                </div>
              </div>

              <div className='Input__grid'>
                <div className='Input__row '>
                  <div className='Input__column'>
                    <p className='Input__label_fs'>Card Holder</p>
                    <TextField fullWidth placeholder='Enter card holder name' />
                  </div>
                </div>
                <div className='Input__row'>
                  <div className='Input__column'>
                    <p className='Input__label_fs'>Email Address</p>
                    <TextField
                      fullWidth
                      placeholder='Enter your email address'
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className='Input__section'>
              <p className='Input__message_fs'>
                Please verify all the above information and proceed with the
                payment options
              </p>
              <div className='Input__action_list Payment__action'>
                <button
                  to={"/booking-cargo"}
                  className='mi_btn mi_btn_outline'
                  onClick={() => {
                    onClose();
                  }}
                >
                  Cancel
                </button>
                <button
                  to={"/booking-cargo"}
                  className='mi_btn mi_btn_secondary'
                  onClick={() => {
                    onClose();
                    handleOpenPopup();
                  }}
                >
                  Pay
                </button>
              </div>
            </div>
          </div> */}
        </DialogContent>
      </Dialog>

      <Popup
        keepMounted
        open={openPopup}
        onClose={handleClosePopup}
        type='success'
      />
    </React.Fragment>
  );
}
