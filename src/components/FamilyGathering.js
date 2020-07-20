import React from "react";
import Slideshow from "./Slideshow";
import TextSlide from "./TextSlide";
import Lines from "./Lines";
import EventsTextSlide from "./EventsTextSlide";
import { Link } from "react-router-dom";

const FamilyGathering = () => {

    return (
      <section
        style={{ height: "920px", width: "100%" }}
        className="flex flex-row justify-center"
      >
        <div className="relative w-2/5">
          <Slideshow />
          <img
            className="w-48 z-40 absolute"
            style={{ left: "-40px", marginTop: "-190px" }}
            src="/images/lines.svg"
            alt="lines"
          />
          <img
            className="rec-gathering z-0 "
            src="/images/rec-bg3.svg"
            alt="grey-bg"
          />
        </div>
        <div className="relative w-2/5">
          <TextSlide />
          <button
            className="btn-txt bg-black hover:bg-white hover:bg-transparent text-white uppercase 
                py-4 px-10 border text-base mt-56 hover:border-black hover:text-black absolute ml-32"
          >
            <Link to="/booking">book a table</Link>
          </button>
          <Lines />
          <EventsTextSlide />
        </div>
      </section>
    );
  }

export default FamilyGathering;
