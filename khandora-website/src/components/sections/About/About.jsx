import React from "react";
// import "./About.css";

const About = () => {
  return (
    <section className="about-section py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-content">
              <h2 className="section-title">About Khandora</h2>
              <p className="about-text lead">
                Founded with a vision to revolutionize the digital landscape,
                Khandora has been at the forefront of providing innovative
                solutions to businesses worldwide.
              </p>
              <p className="about-text">
                Our team of experienced professionals is dedicated to delivering
                exceptional products and services that drive growth and success
                for our clients.
              </p>
              <div className="about-features mt-4">
                <div className="row">
                  <div className="col-6">
                    <div className="feature-item">
                      <i className="fas fa-check-circle text-primary me-2"></i>
                      Quality Assurance
                    </div>
                    <div className="feature-item">
                      <i className="fas fa-check-circle text-primary me-2"></i>
                      Expert Team
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="feature-item">
                      <i className="fas fa-check-circle text-primary me-2"></i>
                      Support 24/7
                    </div>
                    <div className="feature-item">
                      <i className="fas fa-check-circle text-primary me-2"></i>
                      Affordable Pricing
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-image">
              <img
                src="/assets/images/about.jpg"
                alt="About Khandora"
                className="img-fluid rounded-3 shadow"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
