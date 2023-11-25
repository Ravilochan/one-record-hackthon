import React from "react";
import "./PriceList.css";

// MUI Imports
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";

// Transition for Popup
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

export default function PriceList(props) {
  // eslint-disable-next-line react/prop-types
  const { onClose, open, handleOpenReviewCOR, ...other } = props;

  return (
    <React.Fragment>
      <Dialog
        sx={{ "& .MuiDialog-paper": { width: "100%" } }}
        maxWidth='sm'
        open={open}
        TransitionComponent={Transition}
        {...other}
      >
        <DialogTitle>
          <div className='ModalPage__header'>
            <h1 className='ModalPage_main_title_fs'>
              Pick the Flight and Price
            </h1>
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
          <div className='SaveDraft__list'>
            <FlightPriceList />
            <FlightPriceList />
            <FlightPriceList />
            <FlightPriceList />
            <FlightPriceList />
            <FlightPriceList />
            <FlightPriceList />
            <FlightPriceList />
            <FlightPriceList />
            <FlightPriceList />
            <FlightPriceList />
            <FlightPriceList />
            <FlightPriceList />
            <FlightPriceList />
            <FlightPriceList />
            <FlightPriceList />
            <FlightPriceList />
            <FlightPriceList />
          </div>
        </DialogContent>
        <DialogActions>
          <div className='ModalPage__actions'>
            <button
              className='mi_btn mi_btn_medium mi_btn_primary'
              onClick={() => {
                onClose();
              }}
            >
              <span>Close</span>
            </button>
          </div>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

function FlightPriceList() {
  return (
    <React.Fragment>
      <div className='SaveDraftItems__card'>
        <div className='SaveDraftItems__carting_info'>
          <div className='CartingTableData__wrap'>
            <p className='mi_tiny TableData__heading'>Flight Number</p>
            <h1 className='mi_small TableData__bodyInfo'>161223728</h1>
          </div>
        </div>

        <div className='SaveDraftItems__actions'>
          <button className={`mi_btn mi_btn_medium mi_btn_accept`}>
            <span>Rs 12,000</span>
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}
