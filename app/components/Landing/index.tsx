import React from "react";
import Header from "./Header/header";
import HeroSection from "./Hero/hero-section";
import Footer from "./Footer/footer";
import Features from "./Features/features";

const Landing = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <Features />
      </main>
      <Footer />
    </>
  );
};

export default Landing;
