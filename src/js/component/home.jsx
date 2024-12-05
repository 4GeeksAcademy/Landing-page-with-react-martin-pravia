import React from "react";
import Navbar from "./Navbar";
import FirstContainer from "./FirstContainer";
import Cards from "./Cards";
import Footer from "./Footer";

//create your first component
const Home = () => {
  const navBar = {
    buttonCompany: "Viajes increíbles",
    buttonTrips: "Nuestros destinos",
    buttonPacks: "Viajes acompañados",
    buttonUs: "Quienes somos?",
    buttonContact: "Contactanos",
  };

  const footer = {
    title: "© Viajes Increibles",
    year: "2024 "
  };
  return (
    <>
      <Navbar {...navBar} />
      <FirstContainer/>
      <Cards />
      <Footer {...footer} />
    </>
  );
};

export default Home;
