import React from "react";
import Hero from "../../components/sections/Hero/Hero";
import Services from "../../components/sections/Services/Services";
import Products from "../../components/sections/Products/Products";
import Testimonials from "../../components/sections/Testimonials/Testimonials";
import About from "../../components/sections/About/About";
import Contact from "../../components/sections/Contact/Contact";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <Services />
      <Products />
      <About />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Home;
