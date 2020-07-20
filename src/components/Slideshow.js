import React from "react";
import { Fade } from "react-slideshow-image";

const fadeImages = [
  "images/slide_5.jpg",
  "images/slide_6.jpg",
  "images/slide_7.jpg",
];

const fadeProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,

  onChange: (oldIndex, newIndex) => {
    console.log(`fade transition from ${oldIndex} to ${newIndex}`);
  },
};

const Slideshow = () => {
  return (
    <div className="z-30 mt-32">
      <Fade {...fadeProperties}>
        <div className="each-fade ">
          <img
            className="absolute"
            src={fadeImages[0]}
            alt="family-gathering-img"
          />
        </div>
        <div className="each-fade ">
          <img
            className="absolute"
            src={fadeImages[1]}
            alt="family-gathering-img2"
          />
        </div>
        <div className="each-fade">
          <img
            className="absolute"
            src={fadeImages[2]}
            alt="family-gathering-img3"
          />
        </div>
      </Fade>
    </div>
  );
};

export default Slideshow;
