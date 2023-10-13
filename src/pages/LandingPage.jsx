import React from "react";
import Hero from "../components/Hero/Hero";
import CTA from "../components/CTA/CTA";
import Features from "../components/Features/Features";
import Tab from "../components/Tabs/Tab";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <CTA />
      <Features />
      <Tab />
      <Footer />
    </div>
  );
};

export default LandingPage;
