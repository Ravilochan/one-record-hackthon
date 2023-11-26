import React from "react";
import Banner from "../../components/banner/Banner";
import { Link, useNavigate } from "react-router-dom";
import "./Booking.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { TextField } from "@mui/material";
import PriceList from "../../components/PriceList/PriceList";
import { Formik, Form, Field, ErrorMessage } from 'formik';

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
          <Formik
            initialValues={{ 
              name: "",
              iata: "2047125",
              cass: "9502",
              noOfPieces: "",
              noOfUld: "",
              weight: "",
              origin: "CDG / France",
              destination: "DOH / Qatar",
              airline: "",
              flight: "",
              agentCassCode: "",
              commodityCode: "",
              productCode: "",
              shc: "",
              price: "",
            }}
            validate={values => {
              const errors = {};
              if (!values.name) {
                errors.name = 'Required';
              }
              else if (!values.iata) {
                errors.iata = 'Required';
              }
              else if (!values.noOfPieces) {
                errors.noOfPieces = 'Required';
              }
              else if (!values.noOfUld) {
                errors.noOfUld = 'Required';
              }
              else if (!values.weight) {
                errors.weight = 'Required';
              }
              else if (!values.origin) {
                errors.origin = 'Required';
              }
              else if (!values.destination) {
                errors.destination = 'Required';
              }
               else if (!values.airline) {
                errors.airline = 'Required';
              }
              else if (!values.flight) {
                errors.flight = 'Required';
              }
              else if (!values.agentCassCode) {
                errors.agentCassCode = 'Required';
              }
              else if (!values.commodityCode) {
                errors.commodityCode = 'Required';
              }
              else if (!values.productCode) {
                errors.productCode = 'Required';
              }
              else if (!values.price) {
                errors.price = 'Required';
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              // setTimeout(() => {
              //   alert(JSON.stringify(values, null, 2));
              //   setSubmitting(false);
              // }, 400);
              Navigate("/booking-payment", {state: values});
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              setFieldValue
            }) => (
              <Form>
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
                              // value={allValues.name}
                              // onChange={changeHandler}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.name}
                            />
                            {errors.name && touched.name && errors.name}
                          </div>
                        </div>
                        <div className='Input__row two_column'>
                          <div className='Input__column'>
                            <p className='Input__label_fs'>Agent IATA Ref No</p>
                            <TextField
                              fullWidth
                              name='iata'
                              // value={allValues.iata}
                              placeholder='Enter Agent IATA Code'
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.iata}
                            />
                            {errors.iata && touched.iata && errors.iata}
                          </div>
                          <div className='Input__column'>
                            <p className='Input__label_fs'>CASS Code</p>
                            <TextField
                              fullWidth
                              name='cass'
                              // value={allValues.cass}
                              placeholder='Enter Volume'
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.cass}
                            />
                            {errors.cass && touched.cass && errors.cass}
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
                              // value={allValues.noOfPeices}
                              placeholder='Enter No of Pieces'
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.noOfPieces}
                            />
                            {errors.noOfPieces && touched.noOfPieces && errors.noOfPieces}
                          </div>
                          <div className='Input__column'>
                            <p className='Input__label_fs'>No of ULD</p>
                            <TextField
                              fullWidth
                              name='noOfUld'
                              // value={allValues.noOfUld}
                              placeholder='Enter No of ULD'
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.noOfUld}
                            />
                            {errors.noOfUld && touched.noOfUld && errors.noOfUld}
                          </div>
                        </div>
                        <div className='Input__row two_column'>
                          <div className='Input__column'>
                            <p className='Input__label_fs'>Weight</p>
                            <TextField
                              fullWidth
                              name='weight'
                              // value={allValues.weight}
                              placeholder='Chargeable Weight in KGS'
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.weight}
                            />
                            {errors.weight && touched.weight && errors.weight}
                          </div>
                          <div className='Input__column'>
                            <p className='Input__label_fs'>Volume</p>
                            <TextField
                              fullWidth
                              name='agentCassCode'
                              placeholder='Enter Volume'
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.agentCassCode}
                            />
                            {errors.agentCassCode && touched.agentCassCode && errors.agentCassCode}
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
                              // value={allValues.origin}
                              placeholder='Enter Origin / Country'
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.origin}
                            />
                            {errors.origin && touched.origin && errors.origin}
                          </div>
                        </div>
                        <div className='Input__row '>
                          <div className='Input__column'>
                            <p className='Input__label_fs'>Destination / Country</p>
                            <TextField
                              fullWidth
                              name='destination'
                              // value={allValues.destination}
                              placeholder='Enter your Destination / Country'
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.destination}
                            />
                            {errors.destination && touched.destination && errors.destination}
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
                              // value={allValues?.commodityCode}
                              name='commodityCode'
                              // onChange={changeHandler}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.commodityCode}
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
                              // value={allValues?.commodityCode}
                              name='productCode'
                              // onChange={changeHandler}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.productCode}
                            >
                              <MenuItem value='GCR'>GCR</MenuItem>
                            </Select>
                             {errors.productCode && touched.productCode && errors.productCode}
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
                              name="shc"
                              fullWidth
                              placeholder='Enter your Shipping Handling Code (SHC )'
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.shc}
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
                              // value={allValues?.airline}
                              name='airline'
                              // onChange={changeHandler}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.airline}
                            >
                              <MenuItem value='QR'>Qatar Airways</MenuItem>
                            </Select>
                            {errors.airline && touched.airline && errors.airline}
                          </div>
                          <div className='Input__column'>
                            <p className='Input__label_fs'>Flight Number</p>
                            <button
                              type="button"
                              onClick={handleOpenDraftCOR}
                              className='mi_btn mi_btn_medium mi_btn_accept'
                            >
                              <span>Select Flight</span>
                            </button>
                            {errors.price && touched.price && errors.price}
                          </div>
                        </div>
                        <div className='Input__row '></div>
                      </div>
                    </div>
                    <PriceList
                      keepMounted
                      open={openDraftCOR}
                      onClose={(price, flight) => {
                        setFieldValue("price", price);
                        setFieldValue("flight", flight);
                        setOpenDraftCOR(false);
                      }}
                    />

                    <div className='Input__section'>
                      <p className='Input__message_fs'>
                        Please verify all the above information and proceed with the
                        payment options
                      </p>
                      <div className='Input__action_list'>
                        <button
                          type="button"
                          to={"/booking-cargo"}
                          className='mi_btn mi_btn_outline'
                          onClick={() => Navigate("/")}
                        >
                          Cancel
                        </button>
                        <button
                          // to={"/booking-cargo"}
                          className='mi_btn mi_btn_secondary'
                          // onClick={() => Navigate("/booking-payment")}
                          onClick={handleSubmit}
                        >
                          Book Cargo
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Form>
       )}
     </Formik>
        </div>
      </div>
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
