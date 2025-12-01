import React from "react";
import "./HomeServices.css";
import { servicesData } from "../../data/servicesData";

const HomeServices = () => {
  return (
    <section className="services-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle">
              Comprehensive solutions tailored to meet your business needs
            </p>
          </div>
        </div>
        <div className="row g-5">
          {" "}
          {/* Increased gap between cards */}
          {servicesData?.map((service) => (
            <div key={service.id} className="col-lg-6 col-md-6">
              {" "}
              {/* Changed to col-lg-6 for 2 cards */}
              <div className="home-service-card card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <div className="home-service-icon">
                    <i className={service.icon}></i>
                  </div>
                  <div className="home-service-content">
                    {" "}
                    {/* Added wrapper for content */}
                    <h5 className="home-service-title">{service.title}</h5>
                    <p className="home-service-description">
                      {service.description}
                    </p>
                    <div className="home-service-button-container">
                      <button
                        className="home-service-btn btn"
                        //   onClick={() => handleLearnMore(service.id)}
                      >
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
