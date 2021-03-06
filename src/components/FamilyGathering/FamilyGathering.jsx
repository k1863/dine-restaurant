import React from "react";
import { Fade } from "react-slideshow-image";

import CustomButton from "../CustomButton/CustomButton";
import { Link } from "react-router-dom";

import "../../sass/app.scss";

const FamilyGathering = () => {
  const fadeImages = [
    "images/slide_5.jpg",
    "images/slide_6.jpg",
    "images/slide_7.jpg",
  ];

  const fadeImages2 = [
    "images/slide7.jpg",
    "images/slide8.jpg",
    "images/slide9.jpg",
  ];
  const eventNames = ["Family Gathering", "Special Events", "Social Events"];

  // var handleChange = (prev, nxt) => {
  //   if (prev === 0 || prev === 1 || prev === 2) {
  //     setCurrentStyle({
  //       fontWeight: "bold",
  //       opacity: "1",
  //     });
  //   } else if (nxt === 0 || nxt === 1 || nxt === 2) {
  //     setStyle({
  //       fontWeight: "400",
  //       opacity: "1",
  //       color: "red",
  //     });
  //   }
  // };

  const properties = {
    duration: 5000,
    transitionDuration: 500,
    autoplay: true,
    indicators: true,
  };

  return (
    <div className="family-gathering">
      <div className="beaver-lines__fg">
        <img src="/images/lines.svg" alt="lines" />
      </div>
      <div className="slides-container">
        <Fade {...properties}>
          {fadeImages.map((eachImage, index) => (
            <div key={index} className="img-slide">
              <img src={eachImage} alt="dine-event" />
            </div>
          ))}
        </Fade>
      </div>
      <div className="slides-container-tab">
        <Fade {...properties}>
          {fadeImages2.map((eachImage, index) => (
            <div key={index} className="img-slide">
              <img src={eachImage} alt="dine-event" />
            </div>
          ))}
        </Fade>
      </div>
      <div className="gray-vector-slideshow-bg">
        <img src="/images/rec-bg.svg" alt="gray-vector" />
      </div>
      <div className="family-events-text-box">
        <Fade {...properties}>
          <div className="event-text2">
            <h2 className="header__secondary">Family Gathering</h2>
            <p className="text__main">
              We love catering for entire families. So please<br></br> bring
              everyone along for a special meal with<br></br>your loved ones.
              We’ll provide a memorable<br></br>experience for all.
            </p>
          </div>
          <div className="event-text2">
            <h2 className="header__secondary">Special Events</h2>
            <p className="text__main">
              Whether it’s a romantic dinner or special date<br></br> you’re
              celebrating with others we’ll look after<br></br> you. We’ll be
              sure to mark your special date with<br></br> an unforgettable
              meal.
            </p>
          </div>
          <div className="event-text2">
            <h2 className="header__secondary">Social Events</h2>
            <p className="text__main">
              Are you looking to have a larger social event?<br></br> No
              problem! We’re more than happy to cater for<br></br>big parties.
              We’ll work with you to make your<br></br> event a hit with
              everyone.
            </p>
          </div>
        </Fade>
      </div>

      <Link to="/booking">
        <CustomButton className="black-btn btn fg_btn">
          book a table
        </CustomButton>
      </Link>
      <div className="indicator">
        <ul className="event-names">
          <Fade {...properties}>
            {eventNames.map((event) => (
              <li className="event-txt" key={event.index}>
                {event}
              </li>
            ))}
          </Fade>
        </ul>
        <ul className="event-txt-light">
          <Fade {...properties}>
            {eventNames.map((eventitem) => (
              <li className="event-item" key={eventitem.index}>
                {eventitem}
              </li>
            ))}
          </Fade>
        </ul>

        <div className="indicator-lines-cont">
          <Fade {...properties}>
            <img
              className="indicator-line1"
              src="/images/line.svg"
              alt="line"
            />
            <img
              className="indicator-line2"
              src="/images/line.svg"
              alt="line"
            />
            <img
              className="indicator-line3"
              src="/images/line.svg"
              alt="line"
            />
          </Fade>
        </div>
        <div className="indicator-lines-horizontal">
          <Fade {...properties}>
            <img
              className="indicator-line1"
              src="/images/line.svg"
              alt="line"
            />
            <img
              className="indicator-line2"
              src="/images/line.svg"
              alt="line"
            />
            <img
              className="indicator-line3"
              src="/images/line.svg"
              alt="line"
            />
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default FamilyGathering;
