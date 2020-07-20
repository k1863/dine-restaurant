import React from "react";

const OurMenu = () => {

    return (
      <section
        id="our-menu"
        className="-mt-24 flex flex-row justify-center bg-black text-white pt-64 pb-32"
      >
        <div className="w-2/6 mr-20 ">
          <img
            className="absolute w-20 -mt-12"
            src="/images/circle-line.svg"
            alt="c-line"
          />
          <h2 className="text-5xl font-bold leading-tight tracking-tight mb-2">
            <span className="place-txt1"> A few highlights </span>from our menu
          </h2>
          <p className="text-xl tracking-tight">
            We cater for all dietary requirements, but here's a glimpse at some
            of our dinner's favourites. Our menu is revamped every season.
          </p>
        </div>
        <div>
          <div className="flex flex-row border-b border-white pb-10 border-opacity-25">
            <img
              className="w-32 mr-16"
              src="/images/salmon-fillet-img.png"
              alt="salmon-fillet-img"
            />
            <div>
              <h3 className="text-lg font-bold mb-1">Seared Salmon Fillet</h3>
              <p>
                {" "}
                <span className="place-txt1">
                  Our locally sourced salmon served with a
                </span>
                refreshing buckwheat summer salad
              </p>
            </div>
          </div>
          <div className="flex flex-row mt-10 border-b pb-10 border-white border-opacity-25">
            <img
              className="w-32 mr-16"
              src="/images/rosemary-filet.png"
              alt="rosemary-filet"
            />
            <div>
              <h3 className="text-lg font-bold mb-1">Rosemary Filet Mignon</h3>
              <p>
                <span className="place-txt1">
                  Our prime beef served to your taste with a
                </span>
                delicious choice of seasonal sides.
              </p>
            </div>
          </div>
          <div className="flex flex-row mt-10">
            <img
              className="w-32 mr-16"
              src="/images/choco-mousse.png"
              alt="choco-mousse"
            />
            <div>
              <h3 className="text-lg font-bold mb-1">
                Summer Fruit Chocolate Mousse
              </h3>
              <p>
                <span className="place-txt1">
                  Creamy mousse combined with summer
                </span>
                fruits and dark chocolate shavings
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }


export default OurMenu;
