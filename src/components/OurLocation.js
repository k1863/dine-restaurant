import React from "react";

const OurLocation = () => {

    return (
      <section
        id="about-us"
        className="flex flex-row justify-center middle-container"
      >
        <div className="-mt-20 z-20 mr-10">
          <img
            className="shadow-2xl"
            src="images/place-img.jpg"
            alt="place-img"
          />
        </div>
        <div className="ml-10 mt-48 z-10 relative">
          <img
            className="absolute w-20 -mt-12"
            src="/images/circle-line.svg"
            alt="c-line"
          />
          <h2 className="text-5xl font-bold mb-4 place-txt-head text-black leading-snug tracking-wider">
            <span className="place-txt1 ">Enjoyable place</span>
            for all the family
          </h2>
          <p className="text-xl tracking-tight font-normal">
            {" "}
            <span className="place-txt1">
              {" "}
              Our relaxed surroundings make dining with us a{" "}
            </span>
            great experience for everyone.
            <span className="place-txt1"> We can even </span>arrange a tour of
            the farm before your meal.
          </p>
        </div>
       
        <img
          className="rectangular-bg z-0"
          src="/images/rec-bg.svg"
          alt="grey-bg"
        />
      </section>
    );
}

export default OurLocation;
