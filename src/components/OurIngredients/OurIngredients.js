import React from "react";

import "../../sass/app.scss";

const OurIngredients = () => {
  return (
    <div className="our-ingredients">
      <div className="our-ingredients-txt-box">
        <div className="our-ingredients-img">
          <img
            className="locally-sourced-lg"
            src="images/serving-food-img.jpg"
            alt="our-ingredients"
          />
          <img
            src="images/locally-sourced-tablet@2x.jpg"
            alt="locally-sourced"
            className="locally-sourced-md"
          />
        </div>
        <div className="line-circle--ingredients">
          <img src="images/circle-line.svg" alt="gray-vector" />
        </div>
        <div className="locally-sourced-txt">
          <h2 className="header__secondary">
            The most locally
            <br></br>sourced food
          </h2>
          <p className="text__main margin__top margin__bottom">
            All our ingredients come directly from our farm<br></br>or local
            fishery. So you can be sure that you’re<br></br> eating the
            freshest, most sustainable food.
          </p>
        </div>
      </div>
      <div className="beaver-lines">
        <img src="/images/lines.svg" alt="lines" />
      </div>

      <div className="gray-vector">
        <img src="images/rec-bg.svg" alt="gray-vector" />
      </div>
    </div>
  );
};

export default OurIngredients;
