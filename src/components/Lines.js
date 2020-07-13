import React from 'react';
import { Fade } from 'react-slideshow-image';
import $ from "jquery";




const fadeProperties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    onChange: (oldIndex, newIndex) => {
      console.log(`fade line transition from ${oldIndex} to ${newIndex}`);
    }
  }

function Lines(props) {
    return (
      <div className="relative">
        <Fade {...fadeProperties} >   
                 <img className="w-24  z-40 absolute" style={{marginTop: "348px"}} src="/images/line.svg" alt="lines" />
                 <img className="w-24  z-40 absolute " style={{marginTop: "408px"}} src="/images/line.svg" alt="lines" />
                 <img className="w-24  z-40 absolute " style={{marginTop: "470px"}} src="/images/line.svg" alt="lines" />      
        </Fade>
        </div>
        
    );
}

export default Lines;