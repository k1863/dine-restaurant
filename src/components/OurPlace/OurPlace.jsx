import React from "react";

import "./OurPlaceStyles.css";

const OurPlace = () => {
  return (
    <div className="our-place">
      <div className="our-place-img">
        <img src="images/place-img.jpg" alt="dine-place" />
      </div>
      <div className="our-place-txt">
        <div className="line-circle">
          <img src="images/circle-line.svg" alt="line-svg" />
        </div>
        <h2 className="header-txt-black">
          Enjoyable place
          <br></br> for all the family
        </h2>
        <p className="txt-black">
          Our relaxed surroundings make dining with us a great experience for
          everyone. We can even arrange a tour of the farm before your meal.
        </p>
      </div>
      <div className="gray-vector">
        <img src="/images/rec-bg.svg" alt="gray-vector" />
      </div>
    </div>
  );
};

export default OurPlace;
