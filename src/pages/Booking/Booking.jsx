import React from "react";
import logo from "../../logo.png";
import "react-datepicker/dist/react-datepicker.css";
import DateInput from "./DateInput";
import Footer from "../../components/Footer/Footer";
import IncreaseDecrease from "./IncreaseDecrease";
import { Formik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import CustomButton from "../../components/CustomButton/CustomButton";

import "../../sass/app.scss";

const validationSchema = Yup.object({
  firstName: Yup.string()
    .min(3, "Name must be above 3 characters")
    .max(16, "Name cannot be above 16 characters")
    .required("Name is required"),
  email: Yup.string().email("Invalid Email !!").required("Email is required"),
});

const Booking = () => {
  return (
    <React.Fragment>
      <div className="booking-page">
        <div className="booking-container">
          <div className="reserve-info-container">
            <Link to="/">
              <div className="logo-box">
                <img src={logo} alt="dine-logo" />
              </div>
            </Link>
            <div className="header__reservations">
              <h1 className="header__main">Reservations</h1>
              <p className="text__main margin__top">
                We can’t wait to host you. If you have any<br></br> special
                requirements please feel free to call on<br></br> the phone
                number below. We’ll be happy to<br></br> accommodate you.
              </p>
            </div>
            <div className="beaver-lines__reservation">
              <img src="/images/lines.svg" alt="lines" />
            </div>
            <div className="gray-vector__reservation">
              <img src="/images/rec-bg.svg" alt="gray-vector" />
            </div>
          </div>
          <div className="card-container">
            <div className="card-content">
              <Formik
                initialValues={{ firstName: "", email: "" }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                  console.log(values);
                }}
              >
                {({ handleSubmit, handleChange, values, errors }) => (
                  <form name="myBooking" onSubmit={handleSubmit}>
                    <input
                      type="text"
                      name="firstName"
                      className="input"
                      id="inputName"
                      aria-describedby="emailHelp"
                      placeholder="Name"
                      onChange={handleChange}
                      values={values.firstName}
                    />
                    <span className="underline"></span>

                    <p className="error-msg">
                      {errors.firstName ? errors.firstName : null}
                    </p>

                    <input
                      name="email"
                      type="email"
                      className="input"
                      id="InputEmail"
                      aria-describedby="emailHelp"
                      placeholder="Email"
                      onChange={handleChange}
                    />
                    <span className="underline"></span>
                    <p className="error-msg">
                      {errors.email ? errors.email : null}
                    </p>
                    <DateInput />
                    <IncreaseDecrease />
                    <CustomButton
                      type="submit"
                      style={{ width: "100%" }}
                      className="black-btn btn margin__top"
                    >
                      Make Reservation
                    </CustomButton>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Booking;
