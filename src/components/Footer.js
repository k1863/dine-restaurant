import React from "react";
import logo from "./../logo.png";
import { Link } from "react-router-dom";

const Footer = () => {

    return (
      <footer className="flex flex-row bg-black text-white py-24">
        <div>
          <Link to="/">
          <img
            className="w-32 mr-48 ml-48 cursor-pointer"
            src={logo}
            alt="logo"
            />
            </Link>
        </div>

        <span>
          <p className="logo uppercase w-64 mr-32 leading-loose tracking-widest text-sm">
            <span className="place-txt1">marthawaite, sedbergh</span>
            <span className="place-txt1">cumbria</span>
            +00 44 123 4567
          </p>
        </span>
        <span>
          <p className="w-auto leading-loose uppercase tracking-widest text-sm">
            <span className="place-txt1"> Open times </span>
            <span className="place-txt1"> mon - fri: 09:00 am - 10:00 pm</span>
            sat - sun: 09:00 am - 11:30 pm
          </p>
        </span>
      </footer>
    );
  }


export default Footer;
