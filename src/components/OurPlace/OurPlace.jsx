import React from "react";

import "../../sass/app.scss";

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
        <h2 className="header__secondary">
          Enjoyable place
          <br></br> for all the family
        </h2>
        <p className="text__main margin__bottom margin__top">
          Our relaxed surroundings make dining with us a <br></br> great
          experience for everyone. We can even <br></br>arrange a tour of the
          farm before your meal.
        </p>
      </div>
      <div className="gray-vector">
        <img src="/images/rec-bg.svg" alt="gray-vector" />
      </div>
    </div>
  );
};

export default OurPlace;
