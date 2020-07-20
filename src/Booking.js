import React from "react";
import logo from "./logo.png";
import "react-datepicker/dist/react-datepicker.css";
import DateInput from "./components/DateInput";
import Footer from "./components/Footer";
import IncDec from "./IncDec";
import { Formik} from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

const validationSchema = Yup.object({
  firstName: Yup
    .string()
    .min(3, "Name must be above 3 characters")
    .max(16, "Name cannot be above 16 characters")
    .required("Name is required"),
  email: Yup
    .string()
    .email("Invalid Email !!")
    .required("Email is required"),
  
});

const Booking = () => {

  return (
    <React.Fragment>
      <div>
        <div
          style={{ height: "1000px" }}
          className="book-bg-img flex flex-row justify-center"
        >
          <div style={{ marginRight: "10rem" }} className="mb-20">
            <div className="pt-20">
              <Link to="/">
                <img className="logo w-24 " src={logo} alt="dine-logo" />
              </Link>
            </div>
            <div className=" text-white pt-40 ">
              <h1 className="main-head-txt text-6xl tracking-tight">
                Reservations
              </h1>
              <p className="pt-10 pb-20 text-white text-xl tracking-tight">
                <span id="cta-content1">
                  We can't wait to host you. If you have any{" "}
                </span>
                <span id="cta-content1">
                  special requirements feel free to call on{" "}
                </span>
                <span id="cta-content1">
                  the phone number below. We'll be happy to
                </span>{" "}
                accommodate you.
              </p>
            </div>
          </div>
          <div
            className="shadow-2xl mt-64"
            style={{
              backgroundColor: "white",
              width: "32rem",
              height: "35rem",
              top: "20rem",
            }}
          >
            <div className="w-100 text-white text-xl tracking-tight mx-16 my-10 relative">
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
                      className="input w-100 mt-3"
                      id="inputName"
                      aria-describedby="emailHelp"
                      placeholder="Name"
                      onChange={handleChange}
                      values={values.firstName}
                    />
                    <span className="underline"></span>

                    <p className="text-xs text-red-600 mt-1 absolute">
                      {errors.firstName ? errors.firstName : null}
                    </p>

                    <input
                      name="email"
                      type="email"
                      className="input mt-3"
                      id="InputEmail"
                      aria-describedby="emailHelp"
                      placeholder="Email"
                      onChange={handleChange}
                    />
                    <span className="underline"></span>
                    <p className="text-xs text-red-600 mt-1 absolute">
                      {errors.email ? errors.email : null}
                    </p>

                    <DateInput />
                    <IncDec />
                    <button
                      type="submit"
                      style={{ width: "24rem" }}
                      className="btn-txt bg-black hover:bg-white hover:bg-transparent text-white uppercase 
                py-4 px-10 border text-base hover:border-black hover:text-black mt-10 mb-10"
                    >
                      Make Reservation
                    </button>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>
        <img className="rec-lines absolute" src="\images\lines.svg" alt="" />
        <div style={{ top: "-360px" }} className=" relative ">
          <img
            className="absolute rotate-180 img-rec"
            src="/images/rec-bg.svg"
            alt="rec-bg"
          />
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
  }


export default Booking;
