import React from "react";
import Header from "./Header/header";
import HeroSection from "./Hero/hero-section";
import Footer from "./Footer/footer";

const Landing = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
      </main>
      <Footer />
    </>
  );
};

export default Landing;
