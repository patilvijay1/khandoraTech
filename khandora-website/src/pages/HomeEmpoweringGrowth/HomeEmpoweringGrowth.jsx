import React from "react";
import "./HomeEmpoweringGrowth.css";
// Import your image - replace with actual image path
import growthImage from "../../assets/innovation-img.jpg";

function HomeEmpoweringGrowth() {
  return (
    <section className="home-empowering-growth">
      <div className="home-empowering-growth__container">
        {/* Left Side - Image */}
        <div className="home-empowering-growth__image-section">
          <img
            src={growthImage}
            alt="Empowering Growth with Innovative Technology"
            className="home-empowering-growth__image"
          />
        </div>

        {/* Right Side - Content */}
        <div className="home-empowering-growth__content-section">
          <div className="home-empowering-growth__content">
            <h2 className="home-empowering-growth__title">
              Empowering Growth with Innovative Technology
            </h2>
            <p className="home-empowering-growth__description">
              As a leading software development company, we leverage
              industry-best practices to ensure superior results. Our
              development process incorporates Scrum methodology and agile
              development principles, allowing us to adapt quickly to changing
              requirements while maintaining efficiency. Our extensive expertise
              spans various system development methods, enabling us to select
              and implement the most effective approach for each unique project.
              This versatility ensures we deliver optimal solutions that align
              perfectly with your business objectives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeEmpoweringGrowth;
