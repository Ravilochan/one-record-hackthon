import React from "react";
import Banner from "../../components/banner/Banner";
import { Link, useLocation, useParams } from "react-router-dom";
import { TextField } from "@mui/material";
import PriceList from "../../components/PriceList/PriceList";
import "./Track.css";
import Timeline from "../../components/timeline/Timeline";
import ReviewShipment from "../../components/reviewShipment/ReviewShipment";

export default function Track() {
  const params = useParams();
  const [openDraftCOR, setOpenDraftCOR] = React.useState(false);
  const handleOpenDraftCOR = () => {
    setOpenDraftCOR(true);
  };

  const handleCloseDraftCOR = () => {
    setOpenDraftCOR(false);
  };

  return (
    <React.Fragment>
      <Banner title={"Track 157-46078104"} url={"/booking-payment"} />

      <div className='Booking__wrapper'>
        <div className='mi_page_container'>
          <BookingBreadCrumb />
          <div className='Booking__main_container'>
            <article className='VCTgeneration__body_space'>
              <div className='VCTgeneration__two_column_grid'>
                <div className='VCTgeneration__timeline'>
                  <Timeline layout='agent' />
                </div>
                <div className='VCTgeneration__content'>
                  <div className='Input__section'>
                    <h1>Shipment Summary</h1>
                    <div className='VCTgeneration__content_space'>
                      <ReviewShipment />
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>

      <PriceList
        keepMounted
        open={openDraftCOR}
        onClose={handleCloseDraftCOR}
      />
    </React.Fragment>
  );
}

function BookingBreadCrumb() {
  return (
    <div className='BookingBreadCrumb__list'>
      <Link to={"/"} className='BookingBreadCrumb__link_fs'>
        Home
      </Link>
      <i className='bx bx-chevron-right'></i>
      <p className='BookingBreadCrumb__link_fs'>Booking Cargo</p>
      <i className='bx bx-chevron-right'></i>
      <Link to={"/booking-cargo"} className='BookingBreadCrumb__link_fs active'>
        Track
      </Link>
    </div>
  );
}
