import React from "react";
import { Link } from "react-router-dom";
import CustomButton from "../CustomButton/CustomButton";

import "../../sass/app.scss";

const MakeReservation = () => {
  return (
    <div className="make-reservation">
      <h2 className="header__secondary">Ready to make a reservation?</h2>
      <Link to="/booking" className="reserve-link">
        <CustomButton className="white-btn btn rsrv-btn">
          book a table
        </CustomButton>
      </Link>
    </div>
  );
};

export default MakeReservation;
