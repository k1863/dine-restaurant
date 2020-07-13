import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import Slideshow from './components/Slideshow';
import TextSlide from './components/TextSlide';
import Lines from './components/Lines';
import EventsTextSlide from './components/EventsTextSlide';

function App() {


  return (
    <div className="App">
      <div className="call-to-action bg-black relative z-9">
        <img className ="logo w-24 absolute mt-20  ml-48" src={logo} alt="dine-logo" />
         <div className=" bg-black cta-txt ml-48  relative "> 
         <h1 className="main-head-txt text-6xl text-white tracking-tight"><span className="place-txt1">Excuisite dining </span>since 1989</h1>
           <p className="mt-10 text-white text-xl tracking-tight"><span id="cta-content1">Experience our seasonal menus in 
               beautiful </span> <span id="cta-content2">country surroundings.
               Eat the freshest produce</span> from the comfort of our farmhouse.
           </p> 
            <button className="btn-txt bg-transparent hover:bg-black text-white uppercase 
             py-4 px-12 border text-base hover:bg-white hover:text-black mt-10">book a table</button>
        </div>
       
      </div>
      <section id="about-us" className="flex flex-row justify-center  middle-container"> 
        <div className="-mt-20 z-20 mr-10">
          <img className="shadow-2xl" src="images/place-img.jpg" alt="place-img" />
        </div>
        <div className="ml-10 mt-48 z-10 relative">
        <img className="absolute w-20 -mt-12" src="/images/circle-line.svg" alt="c-line" />
        <h2 className="text-5xl font-bold mb-4 place-txt-head text-black leading-snug tracking-wider"><span className="place-txt1 ">Enjoyable place</span>  
             for all the family</h2>
           <p className="text-xl tracking-tight font-normal"> <span className="place-txt1"> Our relaxed surroundings make dining with us a </span >
              great experience for everyone.<span className="place-txt1"> We can even </span>arrange a tour of 
              the farm before your meal.
           </p>
        </div>
        <img className="rectangular-bg z-0" src="/images/rec-bg.svg" alt="grey-bg" />
      </section>
      <section id="src-food" className="mt-40 flex flex-row justify-center"> 
        <div className="self-center mr-20 z-20">
          <img className="absolute w-20 -mt-12" src="/images/circle-line.svg" alt="c-line" />
          <h2 className="text-5xl font-bold text-black tracking-tight"><span className="place-txt1 ">The most locally </span>sourced food</h2>
          <p className="text-xl tracking-tight font-normal">
          <span className="place-txt1 leading-relaxed">All our ingredients come directly from our farm</span>
             or locally fishery.<span className="place-txt1">So you can be sure that you're</span> eating the freshest,
             most sustainable food.
          </p>
        </div>
        <div className="z-10 relative flex">
          <img className="w-2/6 absolute " style={{marginLeft: "450px", marginTop: "185px"}} src="/images/lines.svg" alt="lines" />
          <img src="/images/serving-food-img.jpg" alt="serving-food-img" /> 
        </div>
        <img className="w-3/5 z-0 absolute right-0" style = {{marginTop: "233px"}} src="/images/rec-bg2.svg" alt="grey-bg" />
      </section>
      
      <section id = "our-menu" className="-mt-24 flex flex-row justify-center bg-black text-white pt-64 pb-32">
         <div className="w-2/6 mr-20 ">
         <img className="absolute w-20 -mt-12" src="/images/circle-line.svg" alt="c-line" />
           <h2 className="text-5xl font-bold leading-tight tracking-tight mb-2">
           <span className="place-txt1"> A few highlights </span>from our menu 
           </h2>
           <p className="text-xl tracking-tight">
             We cater for all dietary requirements, but here's a
             glimpse at some of our dinner's favourites. Our menu is revamped
             every season.
           </p>
         </div>
         <div>
           <div className="flex flex-row border-b border-white pb-10 border-opacity-25">
             <img className="w-32 mr-16" src ="/images/salmon-fillet-img.png" alt ="salmon-fillet-img" />
             <div>
             <h3 className="text-lg font-bold mb-1">Seared Salmon Fillet</h3>
             <p> <span className="place-txt1">Our locally sourced salmon served with a</span>
                refreshing buckwheat summer salad</p>
             </div>
            </div>
            <div className="flex flex-row mt-10 border-b pb-10 border-white border-opacity-25">
                 <img className="w-32 mr-16" src="/images/rosemary-filet.png" alt="rosemary-filet" />
               <div>
                 <h3 className="text-lg font-bold mb-1">Rosemary Filet Mignon</h3>
                 <p><span className="place-txt1">Our prime beef served to your taste with a</span>
                  delicious choice of seasonal sides.
                  </p>
               </div>
            </div>
            <div className="flex flex-row mt-10">
               <img className="w-32 mr-16" src="/images/choco-mousse.png" alt="choco-mousse" />
               <div>
                   <h3 className="text-lg font-bold mb-1">Summer Fruit Chocolate Mousse</h3>
                   <p><span className="place-txt1">Creamy mousse combined with summer</span>
                    fruits and dark chocolate shavings</p> 
               </div>
            </div>
         </div>
         </section>
        
         <section  style={{height: "920px",width: "100%"}} className="flex flex-row justify-center">
            <div className="relative w-2/5">
               <Slideshow  />
               <img className="w-48 z-40 absolute" style={{left: "-40px", marginTop: "-190px"}} src="/images/lines.svg" alt="lines" />
               <img className="rec-gathering z-0 " src="/images/rec-bg3.svg" alt="grey-bg" />
            </div>
            <div className="relative w-2/5">
               <TextSlide />
               <button  className="btn-txt bg-black hover:bg-white hover:bg-transparent text-white uppercase 
                py-4 px-10 border text-base hover:border-black hover:text-black absolute ml-32">
                  book a table
               </button>
              <Lines />
              <EventsTextSlide />
              </div>
         </section>
     
           <div className="flex flex-row justify-center py-24 reserve-bg-img">
             <h2 className="text-5xl font-bold leading-tight tracking-tighter mr-64 text-white">Ready to make a reservation?</h2>
             <button className="btn-txt bg-transparent hover:bg-black text-white uppercase 
              py-4 px-10 border text-sm hover:bg-white hover:text-black self-center">book a table</button>
         </div>
         
         <footer className="flex flex-row bg-black text-white py-24">
           <div className=" ">
           <img className="w-32 mr-48 ml-48" src={logo} alt="logo" />
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
    

    </div>
    
  );
}

export default App;


// To do list:
// 1. Layout all content
// 2. Apply CSS  
// 3. Create booking Component
// 4. Clean up design