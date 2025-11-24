import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";
import khandoraImg from "../../../assets/Khandora-Tech-Logo.png";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="row align-items-center min-vh-100">
          <div className="col-lg-6">
            <div className="hero-content">
              <h1 className="hero-title display-4 fw-bold mb-4">
                Welcome to <span className="text-primary">Khandora</span>
              </h1>
              <p className="hero-subtitle lead mb-4">
                We provide innovative products and exceptional services to drive
                your business forward. From cutting-edge software solutions to
                comprehensive consulting services, we're here to help you
                succeed.
              </p>
              <div className="hero-buttons">
                <Link to="/services" className="btn btn-primary btn-lg me-3">
                  Our Services <i className="fas fa-arrow-right ms-2"></i>
                </Link>
                <Link to="/contact" className="btn btn-outline-primary btn-lg">
                  Get In Touch
                </Link>
              </div>
              <div className="hero-stats mt-5">
                <div className="row">
                  <div className="col-4">
                    <div className="stat-item">
                      <h3 className="stat-number">50+</h3>
                      <p className="stat-label">Projects</p>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="stat-item">
                      <h3 className="stat-number">100+</h3>
                      <p className="stat-label">Clients</p>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="stat-item">
                      <h3 className="stat-number">5+</h3>
                      <p className="stat-label">Years</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="hero-image">
              <img
                src={khandoraImg}
                alt="Khandora Hero"
                className="img-fluid rounded-3 shadow"
                onError={(e) => {
                  e.target.src =
                    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZTVlNWU1Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIyNCIgZmlsbD0iIzg4OCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPktoYW5kb3JhIEhlcm8gSW1hZ2U8L3RleHQ+PC9zdmc+";
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
