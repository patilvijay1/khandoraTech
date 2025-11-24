import React from "react";
import "./HomeWeAreHiring.css";
// Import your image - replace with actual image path
import growthImage from "../../assets/innovation-img.jpg";

function HomeWeAreHiring() {
  return (
    <section className="home-empowering-growth">
      <div className="home-empowering-growth__container">
        <div className="home-empowering-growth__content-section">
          <div className="home-empowering-growth__content">
            <h2 className="home-empowering-growth__title">
              Join Our Growing Team – We’re Hiring!
            </h2>
            <p className="home-empowering-growth__description">
              Are you passionate about shaping the future with technology? At
              LogicLoom, we’re a team driven by innovation and excellence.
              Whether your expertise lies in digital solutions, software
              development, or any other domain, we offer a dynamic environment
              that supports your growth and success every step of the way.
            </p>
            <div className="explore-button-container">
              <button
                className="explore-more-btn"
                // onClick={() => handleLearnMore(service.id)}
              >
                Explore More
              </button>
            </div>
          </div>
        </div>

        <div className="home-empowering-growth__image-section">
          <img
            src={growthImage}
            alt="Empowering Growth with Innovative Technology"
            className="home-empowering-growth__image"
          />
        </div>
      </div>
    </section>
  );
}

export default HomeWeAreHiring;
