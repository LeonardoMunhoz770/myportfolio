import React from "react";
import Header from "../../components/header";
import Apresentation from "./apresentation";
import Skills from "./skills";
import AboutUs from "./aboutUs";
import Portifolio from "./portifolio";

const Home = () => {
  return (
    <>
      <Header />
      <Apresentation />
      <Skills />
      <AboutUs />
      <Portifolio />
    </>
  );
};

export default Home;
