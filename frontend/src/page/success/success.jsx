import React from "react";
import Banner from "../../components/banner/Banner";
import Success from "/icons/success.svg";
import { Link } from "react-router-dom";

export default function SuccessPage() {
  return (
    <React.Fragment>
      <Banner title={"Success"} url={"/booking-cargo"} />
      <div style={{ height: "72vh" }}>
        <div className='mi_page_container'>
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
                to={"/track/awb"}
                className='mi_btn mi_btn_medium mi_btn_secondary'
              >
                <span>Track with AWB</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
