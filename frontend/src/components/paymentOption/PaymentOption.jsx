import React from "react";

// MUI Imports
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import Arrow from "/icons/arrow.svg";
import { TextField } from "@mui/material";
import Popup from "../../common/popup/Popup";
// Transition for Popup
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

export default function PaymentOption(props) {
  const { onClose, open, handleOpenReviewCOR, ...other } = props;

  const [openPopup, setOpenPopup] = React.useState(false);
  const handleOpenPopup = () => {
    setOpenPopup(true);
  };

  const handleClosePopup = () => {
    setOpenPopup(false);
  };

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
          <div className='Input__table'>
            <div className='Input__section'>
              {/* Single Row */}
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
          </div>
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
