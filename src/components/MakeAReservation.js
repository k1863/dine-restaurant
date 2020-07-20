import React  from 'react';
import { Link } from "react-router-dom";

const MakeAReservation = () => {

        return (
          <div className="flex flex-row justify-center py-24 reserve-bg-img">
            <h2 className="text-5xl font-bold leading-tight tracking-tighter mr-64 text-white">
              Ready to make a reservation?
            </h2>
            <button
              className="btn-txt bg-transparent hover:bg-black text-white uppercase 
              py-4 px-10 border text-sm hover:bg-white hover:text-black self-center"
            >
              <Link to="/booking">book a table</Link>
            </button>
          </div>
        );
    }


export default MakeAReservation;