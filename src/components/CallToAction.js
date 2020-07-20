import React, { Component } from "react";
import logo from "./../logo.png";
import { Link } from "react-router-dom";

class CallToAction extends Component {
  render(props) {
    return (
      <div className="call-to-action bg-black relative z-9">
        <Link to="/">
          <img
            className="logo w-24 absolute mt-20  ml-48"
            src={logo}
            alt="dine-logo"
          />
        </Link>
        <div className=" bg-black cta-txt ml-48  relative ">
          <h1 className="main-head-txt text-6xl text-white tracking-tight">
            <span className="place-txt1">Excuisite dining </span>since 1989
          </h1>
          <p className="mt-10 text-white text-xl tracking-tight">
            <span id="cta-content1">
              Experience our seasonal menus in beautiful{" "}
            </span>{" "}
            <span id="cta-content2">
              country surroundings. Eat the freshest produce
            </span>{" "}
            from the comfort of our farmhouse.
          </p>
          <Link to="/booking">
            <button
              style={{ width: "16rem" }}
              className="btn-txt bg-transparent hover:bg-black text-white uppercase 
             py-4 px-12 border text-base hover:bg-white hover:text-black mt-10"
            >
              book a table
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default CallToAction;
