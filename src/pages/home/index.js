import React from "react";
import Header from "../../components/header";
import Apresentation from "./apresentation";
import Skills from "./skills";
import AboutUs from "./aboutUs";

const Home = () => {
  return (
    <>
      <Header />
      <Apresentation />
      <Skills />
      <AboutUs />
    </>
  );
};

export default Home;
