import React from "react";
import { Fade } from "react-slideshow-image";
import "./FamilyGatheringStyles.css";
import CustomButton from "../CustomButton/CustomButton";
import { Link } from "react-router-dom";

const fadeImages = [
  "images/slide_5.jpg",
  "images/slide_6.jpg",
  "images/slide_7.jpg",
];

const eventNames = ["Family Gathering", "Special Events", "Social Events"];

const properties = {
  duration: 5000,
  transitionDuration: 500,
  indicators: true,
};

const FamilyGathering = () => {
  return (
    <div className="family-gathering">
      <div className="beaver-lines">
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
      <div className="gray-vector-slideshow-bg">
        <img src="/images/rec-bg.svg" alt="gray-vector" />
      </div>
      <div className="family-events-text-box">
        <Fade {...properties}>
          <div className="event-text">
            <h2>Family Gathering</h2>
            <p>
              We love catering for entire families. So please bring everyone
              along for a special meal with your loved ones. We’ll provide a
              memorable experience for all.
            </p>
          </div>
          <div className="event-text">
            <h2>Special Events</h2>
            <p>
              Whether it’s a romantic dinner or special date you’re celebrating
              with others we’ll look after you. We’ll be sure to mark your
              special date with an unforgettable meal.
            </p>
          </div>
          <div className="event-text">
            <h2>Social Events</h2>
            <p>
              Are you looking to have a larger social event? No problem! We’re
              more than happy to cater for big parties. We’ll work with you to
              make your event a hit with everyone.
            </p>
          </div>
        </Fade>
      </div>
      <Link to="/booking">
        <CustomButton className="custom-btn">book a table</CustomButton>
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
          {eventNames.map((event) => (
            <li key={event.index}>{event}</li>
          ))}
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
      </div>
    </div>
  );
};

export default FamilyGathering;
