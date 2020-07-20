import React from "react";
import $ from "jquery";


// Highlight Event Text for 5 seconds and move to next Text
function EventsTextSlide() {
  function timer() {
    var family = $("#family").children();
    var i = $(family).filter(".highlighted").index();
    $(family[i]).removeClass("highlighted");
    $(family[(i + 1) % family.length]).addClass("highlighted");
  }

  // Properties used for timer from Slideshow plugin
  const fadeProperties = {
    duration: 5500,
    transitionDuration: 500,
    infinite: true,
    onChange: (oldIndex, newIndex) => {
      console.log(`fade transition from ${oldIndex} to ${newIndex}`);
    },
  };

  // Set interval using time from fadeProperties duration variable
  setInterval(timer, fadeProperties.duration);

  return (
    <ul
      id="family"
      style={{ marginTop: "530px" }}
      className="ml-32  tracking-wide text-sm"
    >
      <li className="highlighted font-semibold my-10 opacity-50 cursor-pointer">
        FAMILY GATHERING
      </li>
      <li className="my-10 opacity-50 font-semibold cursor-pointer">
        SPECIAL EVENTS
      </li>
      <li className="my-10 opacity-50 font-semibold  cursor-pointer">
        SOCIAL EVENTS
      </li>
    </ul>
  );
}

export default EventsTextSlide;
