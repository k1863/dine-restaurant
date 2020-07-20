import React  from "react";

const OurIngredients = () => {

    return (
      <section id="src-food" className="mt-40 flex flex-row justify-center">
        <div className="self-center mr-20 z-20">
          <img
            className="absolute w-20 -mt-12"
            src="/images/circle-line.svg"
            alt="c-line"
          />
          <h2 className="text-5xl font-bold text-black tracking-tight">
            <span className="place-txt1 ">The most locally </span>sourced food
          </h2>
          <p className="text-xl tracking-tight font-normal">
            <span className="place-txt1 leading-relaxed">
              All our ingredients come directly from our farm
            </span>
            or locally fishery.
            <span className="place-txt1">
              So you can be sure that you're
            </span>{" "}
            eating the freshest, most sustainable food.
          </p>
        </div>
        <div className="z-10 relative flex">
          <img
            className="w-2/6 absolute "
            style={{ marginLeft: "450px", marginTop: "185px" }}
            src="/images/lines.svg"
            alt="lines"
          />
          <img src="/images/serving-food-img.jpg" alt="serving-food-img" />
        </div>
        <img
          className="w-3/5 z-0 absolute right-0"
          style={{ marginTop: "233px" }}
          src="/images/rec-bg2.svg"
          alt="grey-bg"
        />
      </section>
    );
  }

export default OurIngredients;
