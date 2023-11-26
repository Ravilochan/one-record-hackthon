import React from "react";
import "./PriceList.css";

// MUI Imports
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import Arrow from "/icons/arrow.svg";
// Transition for Popup
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

export default function PriceList(props) {
  const { onClose, open, handleOpenReviewCOR, ...other } = props;

  return (
    <Dialog
      sx={{ "& .MuiDialog-paper": { width: "100%" } }}
      maxWidth='sm'
      open={open}
      TransitionComponent={Transition}
      {...other}
    >
      <DialogTitle>
        <div className='ModalPage__header'>
          <h1 className='ModalPage_main_title_fs'>Pick the Flight and Price</h1>
          <div
            className='ModalPage__close_icon'
            onClick={() => {
              onClose(0, "");
            }}
          >
            <i className='bx bx-x'></i>
          </div>
        </div>
      </DialogTitle>
      <DialogContent dividers>
        <div className='SaveDraft__list'>
          <FlightPriceList
            flightDate='26/11/2023'
            flightNo='QR38'
            price='$11/kg'
            onClose={() => onClose(11, "QR38")}
          />
          <FlightPriceList
            flightDate='26/11/2023'
            flightNo='QR40'
            price='$7.8/kg'
            onClose={() => onClose(7.8, 'QR40')}
          />
          <FlightPriceList
            flightDate='26/11/2023'
            flightNo='QR42'
            price='$7.2/kg'
            onClose={() => onClose(7.2, 'QR42')}
          />
          <FlightPriceList
            flightDate='27/11/2023'
            flightNo='QR38'
            price='$6.0/kg'
            onClose={() => onClose(6,'QR38')}
          />
          <FlightPriceList
            flightDate='27/11/2023'
            flightNo='QR42'
            price='$6.0/kg'
            onClose={() => onClose(6,'QR42')}
          />
          <FlightPriceList
            flightDate='28/11/2023'
            flightNo='QR40'
            price='$6.4/kg'
            onClose={() => onClose(6.4,'QR40')}
          />
          <FlightPriceList
            flightDate='28/11/2023'
            flightNo='QR38'
            price='$4.5/kg'
            onClose={() => onClose(4.5, 'QR38')}
          />
          <FlightPriceList
            flightDate='28/11/2023'
            flightNo='QR42'
            price='$4.0/kg'
            onClose={() => onClose(4, 'QR42')}
          />
        </div>
      </DialogContent>
      <DialogActions>
        <div className='ModalPage__actions'>
          <button
            className='mi_btn mi_btn_medium mi_btn_primary'
            onClick={() => {
              onClose(0, "");
            }}
          >
            <span>Close</span>
          </button>
        </div>
      </DialogActions>
    </Dialog>
  );
}

function FlightPriceList(props) {
  return (
    <div className='SaveDraftItems__card'>
      <div className='SaveDraftItems__carting_info'>
        <div className='CartingTableData__wrap'>
          <p className='mi_tiny TableData__heading'>Flight Number</p>
          <h1 className='mi_small TableData__bodyInfo'>{props.flightNo}</h1>
        </div>
        <div className='CartingTableData__wrap'>
          <p className='mi_tiny TableData__heading'>Flight Date</p>
          <h1 className='mi_small TableData__bodyInfo'>{props.flightDate}</h1>
        </div>
        <div className='CartingTableData__wrap'>
          <p className='mi_tiny TableData__heading'>Destination</p>
          <div className='DestinationTableData__location_wrap'>
            <h1 className='mi_small TableData__bodyInfo'>CDG</h1>
            <img src={Arrow} alt='Arrow' />
            <h1 className='mi_small TableData__bodyInfo'>DOH</h1>
          </div>
        </div>
      </div>

      <div className='SaveDraftItems__actions'>
        <button
          className={`mi_btn mi_btn_medium mi_btn_accept`}
          onClick={() => props.onClose()}
        >
          <span>{props.price}</span>
        </button>
      </div>
    </div>
  );
}
