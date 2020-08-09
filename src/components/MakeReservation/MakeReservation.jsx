import React from "react";
import { Link } from "react-router-dom";
import CustomButton from "../CustomButton/CustomButton";

import "./MakeReservationStyles.css";

const MakeReservation = () => {
  return (
    <div className="make-reservation">
      <h2>ready to make a reservation?</h2>
      <Link to="/booking" className="reserve-link">
        <CustomButton className="custom-btn2 btn-reservation">book a table</CustomButton>
      </Link>
    </div>
  );
};

export default MakeReservation;
