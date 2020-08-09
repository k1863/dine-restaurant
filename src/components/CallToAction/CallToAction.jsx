import React from "react";
import logo from "../../logo.png";
import { Link } from "react-router-dom";
import CustomButton from "../CustomButton/CustomButton.jsx";

import "./CallToActionStyle.css";

const CallToAction = (props) => {
  return (
    <div className="call-to-action">
      <Link to="/">
        <div className="logo-box">
          <img src={logo} alt="dine-logo" />
        </div>
      </Link>
      <div className="header">
        <h1>
          Exquisite dining
          <br></br> since 1989
        </h1>
        <p>
          Experience our seasonal menu in beautiful country surroundings. Eat
          the freshest produce from the comfort of our farmhouse.
        </p>
        <Link to="/booking">
          <CustomButton className="custom-btn2">book a table</CustomButton>
        </Link>
      </div>
    </div>
  );
};

export default CallToAction;
