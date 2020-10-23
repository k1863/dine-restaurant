import React from "react";

import "../../sass/app.scss";

const OurIngredients = () => {
  return (
    <div className="our-ingredients">
      <div className="our-ingredients-txt-box">
        <div className="line-circle">
          <img src="images/circle-line.svg" alt="gray-vector" />
        </div>
        <h2 className="header__secondary">
          The most locally
          <br></br>sourced food
        </h2>
        <p className="text__main margin__top margin__bottom">
          All our ingredients come directly from our farm<br></br>or local
          fishery. So you can be sure that you’re<br></br> eating the freshest,
          most sustainable food.
        </p>
      </div>
      <div className="beaver-lines">
        <img src="/images/lines.svg" alt="lines" />
      </div>
      <div className="our-ingredients-img">
        <img src="images/serving-food-img.jpg" alt="our-ingredients" />
      </div>
      <div className="gray-vector">
        <img src="images/rec-bg.svg" alt="gray-vector" />
      </div>
    </div>
  );
};

export default OurIngredients;
