import React from "react";
import Hero from "../../components/sections/Hero/Hero";
import Services from "../../components/sections/Services/Services";
import Products from "../../components/sections/Products/Products";
import Testimonials from "../../components/sections/Testimonials/Testimonials";
import About from "../../components/sections/About/About";
import Contact from "../../components/sections/Contact/Contact";
import "./Home.css";
import HomeCarousel from "../HomeCarousel/HomeCarousel";
import HomeWhoWeAre from "../HomeWhoWeAre/HomeWhoWeAre";
import HomeWhyKhandora from "../HomeWhyKhandora/HomeWhyKhandora";
import HomeGuidingPrinciples from "../HomeGuidingPrinciples/HomeGuidingPrinciples";
import HomeElevatingBusinesses from "../HomeElevatingBusinesses/HomeElevatingBusinesses";
import HomeEmpoweringGrowth from "../HomeEmpoweringGrowth/HomeEmpoweringGrowth";
import HomeWeAreHiring from "../HomeWeAreHiring/HomeWeAreHiring";
import HomeServices from "../HomeServices/HomeServices";

const Home = () => {
  return (
    <>
      <HomeCarousel />
      <div className="container-fluid px-0">
        <HomeWhoWeAre />
        <HomeGuidingPrinciples />
        <HomeElevatingBusinesses />
        <HomeWhyKhandora />
        <HomeEmpoweringGrowth />
        <HomeWeAreHiring />
        {/* <Hero /> */}
        <HomeServices />
        {/* <Services /> */}
        {/* <Products /> */}
        {/* <About /> */}
        <Testimonials />
        <Contact />
      </div>
    </>
  );
};

export default Home;
