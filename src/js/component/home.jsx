import React from "react";
import Navbar from "./Navbar";

//create your first component
const Home = () => {
  const navBar = {
    buttonCompany: "Viajes increíbles",
    buttonTrips: "Nuestros destinos",
    buttonPacks: "Viajes acompañados",
    buttonUs: "Quienes somos?",
    buttonContact: "Contactanos",
  };

  return <Navbar {...navBar} />;
};

export default Home;
