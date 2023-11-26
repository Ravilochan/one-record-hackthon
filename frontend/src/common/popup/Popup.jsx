import React from "react";
import Success from "/icons/success.svg";
import Error from "/icons/error.svg";
import "./Popup.css";

// MUI Imports

import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import { Link } from "react-router-dom";
// Transition for Popup
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

export default function Popup(props) {
  const { onClose, open, handleOpenReviewCOR, type, ...other } = props;

  return (
    <Dialog
      sx={{ "& .MuiDialog-paper": { width: "100%" } }}
      maxWidth='sm'
      open={open}
      TransitionComponent={Transition}
      {...other}
    >
      <DialogContent>
        {type === "success" ? (
          <div className='Popup__body'>
            <div
              className='Popup__close_icon'
              onClick={() => {
                onClose();
              }}
            >
              <i className='bx bx-x'></i>
            </div>
            <div className='Popup__content'>
              <div className='Popup__icon_space'>
                <img src={Success} alt='Success' />
              </div>
              <div className='Popup__content_space'>
                <h1 className='Popup__heading_fs'>Payment Done Successfully</h1>
                <p className='Popup__message_fs'>
                  Your Booking is confirmed and you can track your shipment with
                  awb number
                </p>
              </div>
              <div className='Popup__actions'>
                <Link
                  to={"/track"}
                  className='mi_btn mi_btn_medium mi_btn_secondary'
                >
                  <span>Track with AWB</span>
                </Link>
              </div>
            </div>
          </div>
        ) : (
          type === "error" && (
            <div className='Popup__body'>
              <div
                className='Popup__close_icon'
                onClick={() => {
                  onClose();
                }}
              >
                <i className='bx bx-x'></i>
              </div>
              <div className='Popup__content'>
                <div className='Popup__icon_space'>
                  <img src={Error} alt='Error' />
                </div>
                <div className='Popup__content_space'>
                  <h1 className='Popup__heading_fs'>
                    Oops ! Something went wrong
                  </h1>
                  <p className='Popup__message_fs'>
                    Your Booking is not confirmed
                  </p>
                </div>
                <div className='Popup__actions'>
                  <Link
                    to={"/booking-payment"}
                    className='mi_btn mi_btn_medium mi_btn_secondary'
                  >
                    <span>Try Again</span>
                  </Link>
                </div>
              </div>
            </div>
          )
        )}
      </DialogContent>
      <DialogActions></DialogActions>
    </Dialog>
  );
}
