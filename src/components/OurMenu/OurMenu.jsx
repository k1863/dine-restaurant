import React, { Component } from "react";

import "./OurMenuStyles.css";

class OurMenu extends Component {
  render() {
    return (
      <div className="our-menu">
        <div className="our-menu-text-box">
          <div className="line-circle">
            <img src="images/circle-line.svg" alt="gray-vector" />
          </div>
          <h2 className="header-txt-black">
            A few highlights <br></br>
            from our menu
          </h2>
          <p className="txt-black">
            We cater for all dietary requirements, but here's a glimpse at some
            of our dinner's favourites. Our menu is revamped every season.
          </p>
        </div>
        <div className="our-menu-imgs-box">
          <div className="menu-food">
            <div className="food-img">
              <img src="/images/salmon-fillet-img.png" alt="salmon" />
              <img className="line-food" src="/images/line.svg" alt="line" />
            </div>
            <div className="food-txt-box">
              <h5 className="food-header">Seared Salmon Fillet</h5>
              <p className="food-txt">
                Our locally sourced salmon served with a refreshing buckwheat
                summer salad.
              </p>
            </div>
          </div>
          <div className="menu-food">
            <div className="food-img">
              <img src="/images/rosemary-filet.png" alt="Filet" />
              <img className="line-food" src="/images/line.svg" alt="line" />
            </div>
            <div className="food-txt-box">
              <h5 className="food-header">Rosemary Filet Mignon</h5>
              <p className="food-txt">
                Our prime beef served to your taste with a delicious choice of
                seasonal sides.
              </p>
            </div>
          </div>
          <div className="menu-food">
            <div className="food-img">
              <img src="/images/choco-mousse.png" alt="fruit-choco" />
              <img className="line-food" src="/images/line.svg" alt="line" />
            </div>
            <div className="food-txt-box">
              <h5 className="food-header">Summer Fruit Chocolate Mousse</h5>
              <p className="food-txt">
                Creamy mousse combined with summer fruits and dark chocolate
                shavings.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OurMenu;
