import React from "react";
import "../../App.css";
import CallToAction from "../../components/CallToAction/CallToAction.jsx";
import OurPlace from "../../components/OurPlace/OurPlace";
import OurIngredients from "../../components/OurIngredients/OurIngredients";
import OurMenu from "../../components/OurMenu/OurMenu";
import FamilyGathering from "../../components/FamilyGathering/FamilyGathering";
import MakeAReservation from "../../components/MakeReservation/MakeReservation";
import Footer from "../../components/Footer/Footer.jsx";

const Home = () => {
  return (
    <div className="App">
      <CallToAction />
      <OurPlace />
      <OurIngredients />
      <OurMenu />
      <FamilyGathering />
      <MakeAReservation />
      <Footer />
    </div>
  );
};

export default Home;
