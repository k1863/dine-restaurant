import React from "react";
import logo from "../../logo.png";
import { Link } from "react-router-dom";
import CustomButton from "../CustomButton/CustomButton.jsx";

import "../../sass/app.scss";

const CallToAction = (props) => {
  return (
    <div className="call-to-action">
      <Link to="/">
        <div className="logo-box-cta">
          <img src={logo} alt="dine-logo" />
        </div>
      </Link>
      <div className="header">
        <h1 className="header__main">
          Exquisite dining
          <br></br> since 1989
        </h1>
        <p className="text__main margin__bottom margin__top">
          Experience our seasonal menu in beautiful <br></br> country
          surroundings. Eat the freshest produce <br></br>from the comfort of
          our farmhouse.
        </p>
        <Link to="/booking">
          <CustomButton className="white-btn btn">book a table</CustomButton>
        </Link>
      </div>
    </div>
  );
};

export default CallToAction;
