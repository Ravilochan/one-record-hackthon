import React from "react";
import Banner from "../../components/banner/Banner";
import { Link, useNavigate } from "react-router-dom";
import "./Booking.css";
import { TextField } from "@mui/material";
import PriceList from "../../components/PriceList/PriceList";

export default function Booking() {
  const Navigate = useNavigate();
  const [openDraftCOR, setOpenDraftCOR] = React.useState(false);
  const handleOpenDraftCOR = () => {
    setOpenDraftCOR(true);
  };

  const handleCloseDraftCOR = () => {
    setOpenDraftCOR(false);
  };

  return (
    <React.Fragment>
      <Banner title={"Shipment Info"} url={"/"} />

      <div className='Booking__wrapper'>
        <div className='mi_page_container'>
          <BookingBreadCrumb />
          <div className='Booking__main_container'>
            <div className='Input__table'>
              <div className='Input__section'>
                <h1>Cargo Info</h1>
                {/* Single Row */}
                <div className='Input__grid'>
                  <div className='Input__row '>
                    <div className='Input__column'>
                      <p className='Input__label_fs'>MAWB</p>
                      <TextField fullWidth placeholder='Enter your MAWB' />
                    </div>
                  </div>
                  <div className='Input__row two_column'>
                    <div className='Input__column'>
                      <p className='Input__label_fs'>Gross Weight</p>
                      <TextField
                        fullWidth
                        placeholder='Enter your Gross Weight'
                      />
                    </div>
                    <div className='Input__column'>
                      <p className='Input__label_fs'>Chargable Weight</p>
                      <TextField
                        fullWidth
                        placeholder='Enter your Chargable Weight'
                      />
                    </div>
                  </div>
                </div>

                {/* Single Row */}
                <div className='Input__grid'>
                  <div className='Input__row'>
                    <div className='Input__column'>
                      <p className='Input__label_fs'>Expected Piecses</p>
                      <TextField
                        fullWidth
                        placeholder='Enter your Expected Piecses'
                      />
                    </div>
                  </div>
                  <div className='Input__row '>
                    <div className='Input__column'>
                      <p className='Input__label_fs'>
                        Country / Address of Destination
                      </p>
                      <TextField
                        fullWidth
                        placeholder='Enter your Country / Address of Destination'
                      />
                    </div>
                  </div>
                </div>

                {/* Single Row */}
                <div className='Input__grid'>
                  <div className='Input__row'>
                    <div className='Input__column'>
                      <p className='Input__label_fs'>Commodity</p>
                      <TextField fullWidth placeholder='Enter your Commodity' />
                    </div>
                  </div>
                  <div className='Input__row '>
                    <div className='Input__column'>
                      <p className='Input__label_fs'>Commodity Type</p>
                      <TextField
                        fullWidth
                        placeholder='Enter your Commodity Type'
                      />
                    </div>
                  </div>
                </div>

                {/* Single Row */}
                <div className='Input__grid'>
                  <div className='Input__row'>
                    <div className='Input__column'>
                      <p className='Input__label_fs'>
                        Shipping Handling Code (SHC )
                      </p>
                      <TextField
                        fullWidth
                        placeholder='Enter your Shipping Handling Code (SHC )'
                      />
                    </div>
                  </div>
                  <div className='Null_space'></div>
                </div>
              </div>
              <div className='Input__section'>
                <h1>Flight Info</h1>
                {/* Single Row */}
                <div className='Input__grid'>
                  <div className='Input__row two_column'>
                    <div className='Input__column'>
                      <p className='Input__label_fs'>Airline</p>
                      <TextField fullWidth placeholder='Enter your Airline' />
                    </div>
                    <div className='Input__column'>
                      <p className='Input__label_fs'>Flight Number</p>
                      <button
                        onClick={handleOpenDraftCOR}
                        className='mi_btn mi_btn_medium mi_btn_accept'
                      >
                        <span>Select Flight</span>
                      </button>
                    </div>
                  </div>
                  <div className='Input__row '></div>
                </div>
              </div>

              <div className='Input__section'>
                <p className='Input__message_fs'>
                  Please verify all the above information and proceed with the
                  payment options
                </p>
                <div className='Input__action_list'>
                  <button
                    to={"/booking-cargo"}
                    className='mi_btn mi_btn_outline'
                    onClick={() => Navigate("/")}
                  >
                    Cancel
                  </button>
                  <button
                    to={"/booking-cargo"}
                    className='mi_btn mi_btn_secondary'
                    onClick={() => Navigate("/booking-payment")}
                  >
                    Book Cargo
                  </button>
                </div>
              </div>
            </div>
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
    <React.Fragment>
      <div className='BookingBreadCrumb__list'>
        <Link to={"/"} className='BookingBreadCrumb__link_fs'>
          Home
        </Link>
        <i className='bx bx-chevron-right'></i>
        <p className='BookingBreadCrumb__link_fs'>Booking Cargo</p>
        <i className='bx bx-chevron-right'></i>
        <Link
          to={"/booking-cargo"}
          className='BookingBreadCrumb__link_fs active'
        >
          Shipment Info
        </Link>
      </div>
    </React.Fragment>
  );
}
