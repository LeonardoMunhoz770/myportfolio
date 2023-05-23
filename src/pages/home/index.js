import React from "react";
import Header from "../../components/header";
import Apresentation from "./apresentation";
import Skills from "./skills";
import AboutUs from "./aboutUs";
import Portifolio from "./portifolio";
import Contact from "./contact";
import Footer from "../../components/footer";

const Home = ({ toggleTheme }) => {
  return (
    <>
      <Header toggleTheme={toggleTheme} />
      <Apresentation />
      <Skills />
      <AboutUs />
      <Portifolio />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
