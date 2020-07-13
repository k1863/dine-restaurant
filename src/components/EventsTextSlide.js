import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { Fade } from 'react-slideshow-image';
import {slide} from 'react-slideshow-image';




function EventsTextSlide(){

    function timer() {

        var family = $('#family').children();
                var i = $(family).filter('.highlighted').index();
                $(family[i]).removeClass('highlighted');
                $(family[(i+1)%family.length]).addClass('highlighted');
                
      }

    const fadeProperties = {
        duration: 5500,
        transitionDuration: 500,
        infinite: true,
        indicators: true,
        pauseOnHover: false,
        onChange: (oldIndex, newIndex) => { 
          console.log(`fade transition from ${oldIndex} to ${newIndex}`);
        }
      }

      setInterval(timer, fadeProperties.duration);

 return(
    <ul  id="family" style={{marginTop: "530px"}} className="ml-32  tracking-wide text-sm"> 
         <li className="highlighted font-semibold my-10 opacity-50 hover:opacity-100 cursor-pointer">FAMILY GATHERING</li>
         <li className="my-10 opacity-50 font-semibold hover:opacity-100 cursor-pointer">SPECIAL EVENTS</li>
         <li className="my-10 opacity-50 font-semibold hover:opacity-100 cursor-pointer">SOCIAL EVENTS</li>
     </ul>
 
    );
}

export default EventsTextSlide;