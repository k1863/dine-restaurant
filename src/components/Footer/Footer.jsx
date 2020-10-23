import React from "react";
import { Link } from "react-router-dom";
import logo from "../../logo.png";

import "../../sass/app.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="logo-box-footer">
        <Link to="/">
          <img src={logo} alt="dine-logo" />
        </Link>
      </div>

      <div className="address">
        <p>
          MARTHWAITE SEDBERGH<br></br> CUMBRIA <br></br>+00 44 123 4567
        </p>
      </div>
      <div className="open-times">
        <p>
          OPEN TIMES <br></br> MON - FRI: 09:00 AM - 10:00 PM <br></br> SAT -
          SUN: 09:00 AM - 11:30 PM
        </p>
      </div>
    </div>
  );
};

export default Footer;
