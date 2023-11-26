import React from "react";
import Banner from "../../components/banner/Banner";
import { Link, useNavigate } from "react-router-dom";
import "./Booking.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { TextField } from "@mui/material";
import PriceList from "../../components/PriceList/PriceList";

export default function Booking() {
  const Navigate = useNavigate();
  const [openDraftCOR, setOpenDraftCOR] = React.useState(false);
  const [allValues, setAllValues] = React.useState({
    name: "John Doe",
    iata: "2047125",
    cass: "9502",
    noOfPeices: 2,
    noOfUld: 4,
    weight: 200,
    origin: "CDG / France",
    destination: "DOH / Qatar",
    airline: "",
    flight: "",
  });
  const changeHandler = (e) => {
    setAllValues({ ...allValues, [e.target.name]: e.target.value });
  };

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
                      <p className='Input__label_fs'>Customer Name</p>
                      <TextField
                        fullWidth
                        placeholder='Enter Customer Name'
                        name='name'
                        value={allValues.name}
                        onChange={changeHandler}
                      />
                    </div>
                  </div>
                  <div className='Input__row two_column'>
                    <div className='Input__column'>
                      <p className='Input__label_fs'>Agent IATA Ref No</p>
                      <TextField
                        fullWidth
                        name='iata'
                        value={allValues.iata}
                        placeholder='Enter Agent IATA Code'
                      />
                    </div>
                    <div className='Input__column'>
                      <p className='Input__label_fs'>CASS Code</p>
                      <TextField
                        fullWidth
                        name='cass'
                        value={allValues.cass}
                        placeholder='Enter Volume'
                      />
                    </div>
                  </div>
                </div>

                {/* Single Row */}
                <div className='Input__grid'>
                  <div className='Input__row two_column'>
                    <div className='Input__column'>
                      <p className='Input__label_fs'>Total Pieces</p>
                      <TextField
                        fullWidth
                        name='noOfPieces'
                        value={allValues.noOfPeices}
                        placeholder='Enter No of Pieces'
                      />
                    </div>
                    <div className='Input__column'>
                      <p className='Input__label_fs'>No of ULD</p>
                      <TextField
                        fullWidth
                        name='noOfUld'
                        value={allValues.noOfUld}
                        placeholder='Enter No of ULD'
                      />
                    </div>
                  </div>
                  <div className='Input__row two_column'>
                    <div className='Input__column'>
                      <p className='Input__label_fs'>Weight</p>
                      <TextField
                        fullWidth
                        name='volume'
                        value={allValues.weight}
                        placeholder='Chargeable Weight in KGS'
                      />
                    </div>
                    <div className='Input__column'>
                      <p className='Input__label_fs'>Volume</p>
                      <TextField
                        fullWidth
                        name='agentCassCode'
                        placeholder='Enter Volume'
                      />
                    </div>
                  </div>
                </div>

                {/* Single Row */}
                <div className='Input__grid'>
                  <div className='Input__row'>
                    <div className='Input__column'>
                      <p className='Input__label_fs'>
                        Origin Airport / Origin Country
                      </p>
                      <TextField
                        fullWidth
                        name='origin'
                        value={allValues.origin}
                        placeholder='Enter Origin / Country'
                      />
                    </div>
                  </div>
                  <div className='Input__row '>
                    <div className='Input__column'>
                      <p className='Input__label_fs'>Destination / Country</p>
                      <TextField
                        fullWidth
                        name='destination'
                        value={allValues.destination}
                        placeholder='Enter your Destination / Country'
                      />
                    </div>
                  </div>
                </div>

                {/* Single Row */}
                <div className='Input__grid'>
                  <div className='Input__row'>
                    <div className='Input__column'>
                      <InputLabel id='demo-simple-select-label'>
                        Commodity Code
                      </InputLabel>
                      <Select
                        labelId='demo-simple-select-label'
                        id='demo-simple-select'
                        value={allValues?.commodityCode}
                        name='commodityCode'
                        onChange={changeHandler}
                      >
                        <MenuItem value='9999'>9999</MenuItem>
                      </Select>
                    </div>
                  </div>
                  <div className='Input__row '>
                    <div className='Input__column'>
                      <InputLabel id='demo-simple-select-label'>
                        Product Code
                      </InputLabel>
                      <Select
                        labelId='demo-simple-select-label'
                        id='demo-simple-select'
                        value={allValues?.commodityCode}
                        name='commodityCode'
                        onChange={changeHandler}
                      >
                        <MenuItem value='GCR'>GCR</MenuItem>
                      </Select>
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
                      <InputLabel id='demo-simple-select-label'>
                        Airline
                      </InputLabel>
                      <Select
                        labelId='demo-simple-select-label'
                        id='demo-simple-select'
                        value={allValues?.airline}
                        name='airline'
                        onChange={changeHandler}
                      >
                        <MenuItem value='QR'>Qatar Airways</MenuItem>
                      </Select>
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
    <div className='BookingBreadCrumb__list'>
      <Link to={"/"} className='BookingBreadCrumb__link_fs'>
        Home
      </Link>
      <i className='bx bx-chevron-right'></i>
      <p className='BookingBreadCrumb__link_fs'>Booking Cargo</p>
      <i className='bx bx-chevron-right'></i>
      <Link to={"/booking-cargo"} className='BookingBreadCrumb__link_fs active'>
        Shipment Info
      </Link>
    </div>
  );
}
