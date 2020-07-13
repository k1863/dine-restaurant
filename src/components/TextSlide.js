import React from 'react';
import { Fade } from 'react-slideshow-image';


const fadeProperties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    onChange: (oldIndex, newIndex) => {
     
      console.log(`fade transition from ${oldIndex} to ${newIndex}`);
    }
  }

function TextSlide(props) {
    return (
      <div className="ml-32 mt-48">
          <Fade {...fadeProperties}>
          <div className="absolute">
                 <h2 className="text-5xl leading-tight tracking-tighter">Family Gathering</h2>
                 <p><span className="place-txt1">We love catering for entire families. So please </span><span className="place-txt1">
                     bring everyone along for a special meal with </span><span className="place-txt1"> your
                     loved ones. We'll provide a memorable </span> experience for all.
                 </p>
             </div>
              <div className="absolute">
                 <h2 className="text-5xl leading-tight tracking-tighter">Special Events</h2>
                 <p><span className="place-txt1">Whether it’s a romantic dinner or special date</span>
                 <span className="place-txt1">you’re celebrating with others we’ll look after</span>
                 <span className="place-txt1">you. We’ll be sure to mark your special date
                 </span>with an unforgettable meal.</p>
              </div>
              <div className="absolute">
                  <h2 className="text-5xl leading-tight tracking-tighter">Social Events</h2>
                  <p><span className="place-txt1">Are you looking to have a larger social event?
                    </span><span className="place-txt1">No problem! We’re more than happy to cater</span>
                    <span className="place-txt1"> for big parties. We’ll work with you to make</span> 
                     your event a hit with everyone.</p>
              </div> 
        </Fade>
      </div>
        
    );
}

export default TextSlide;