import React from 'react';
import "./App.css";
import CallToAction from "./components/CallToAction";
import OurLocation from "./components/OurLocation";
import OurIngredients from "./components/OurIngredients";
import OurMenu from "./components/OurMenu";
import FamilyGathering from "./components/FamilyGathering";
import MakeAReservation from "./components/MakeAReservation";
import Footer from "./components/Footer";

const Home = () => {

        return (
          <div className="App">
            <CallToAction />
            <OurLocation />
            <OurIngredients />
            <OurMenu />
            <FamilyGathering />
            <MakeAReservation />
            <Footer />
          </div>
        );
    }

export default Home;