import React from "react";
import Navbar from "./Navbar/Navbar";
import Header from "./Header/Header";
import Cards from "./Cards/Cards";
import Footer from "./Footer/Footer";
import Toprated from "./TopRated/Toprated";

const Main = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Cards />
      <Toprated />
      <Footer />
    </>
  );
};

export default Main;
