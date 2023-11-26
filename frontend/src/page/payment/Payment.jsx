import React from "react";
import Banner from "../../components/banner/Banner";
import { Link, useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
import "./Payment.css";
import PaymentOption from "../../components/paymentOption/PaymentOption";

export default function Payment() {
  const Navigate = useNavigate();
  const [openPopup, setOpenPopup] = React.useState(false);
  const handleOpenDraftCOR = () => {
    setOpenPopup(true);
  };

  const handleClosePopup = () => {
    setOpenPopup(false);
  };

  return (
    <React.Fragment>
      <Banner title={"Payment"} url={"/booking-cargo"} />

      <div className='Booking__wrapper'>
        <div className='mi_page_container'>
          <BookingBreadCrumb />
          <div className='Booking__main_container'>
            <div className='Input__table'>
              <div className='Input__section'>
                {/* <h1>AWB 12232833</h1> */}
                {/* Single Row */}
                <div className='Input__grid'>
                  <div className='Input__row '>
                    <div className='Input__column'>
                      <p className='Input__label_fs'>
                        Customer Email Address to send Invoice
                      </p>
                      <TextField fullWidth placeholder='Enter Email Address' />
                    </div>
                  </div>
                </div>
              </div>
              <div className='Input__section'>
                <h1>Shipment Billing</h1>
                {/* Payment Row */}
                <div className='Input__grid'>
                  <div className='PaymentForm__container'>
                    <article className='Input__row_section'>
                      <hgroup className='Input__title_label_space'>
                        <h2 className='mi_note'>Total Bill Details</h2>
                      </hgroup>
                      <div className='PaymentForm__bill_card'>
                        <div className='PaymentForm__bill_card_basic'>
                          <div className='PaymentForm__bill_row'>
                            <h2 className='mi_small bill_title_fs'>
                              Net Amount
                            </h2>
                            <p className='mi_note bill_amount_fs'>$ 1200</p>
                          </div>
                          <div className='PaymentForm__bill_row'>
                            <h2 className='mi_small bill_title_fs'>
                              GRC ( $ 6.0 * 200 Kg )
                            </h2>
                            <p className='mi_note bill_amount_fs'>$ 1200</p>
                          </div>
                          {/* <div className='PaymentForm__bill_row'>
                            <h2 className='mi_small bill_title_fs'>
                              SHC 2 ( Rs 10 * 100 Kg )
                            </h2>
                            <p className='mi_note bill_amount_fs'>₹ 1,000</p>
                          </div> */}
                        </div>
                        <div className='PaymentForm__bill_card_taxes'>
                          <div className='PaymentForm__bill_row'>
                            <h2 className='mi_small bill_title_fs'>
                              Taxes (5%)
                            </h2>
                            <p className='mi_note bill_amount_fs'>$ 60</p>
                          </div>
                        </div>
                        <div className='PaymentForm__bill_card_total'>
                          <div className='PaymentForm__bill_row'>
                            <h2 className='mi_small'>Total Amount</h2>
                            <h2 className='mi_small'>$ 1260</h2>
                          </div>
                        </div>
                      </div>
                    </article>

                    <article className='Input__row_section'>
                      <div className='Input__title_label_space'>
                        <div className='Label_with_info'>
                          <h2 className='mi_miniheading '>
                            Total Bill Details
                          </h2>
                          <div className='final_price_tag'>
                            <h2 className='mi_heading'>$ 1260</h2>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
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
                    className='mi_btn mi_btn_secondary'
                    onClick={handleOpenDraftCOR}
                  >
                    Make Payment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <PaymentOption keepMounted open={openPopup} onClose={handleClosePopup} />
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
      <Link to={"/booking-cargo"} className='BookingBreadCrumb__link_fs'>
        Shipment Info
      </Link>
      <i className='bx bx-chevron-right'></i>
      <Link to={"/booking-cargo"} className='BookingBreadCrumb__link_fs active'>
        Payment
      </Link>
    </div>
  );
}
