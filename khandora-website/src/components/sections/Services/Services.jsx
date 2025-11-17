import React from "react";
import { servicesData } from "../../../data/servicesData";
import "./Services.css";

const Services = () => {
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
        <div className="row g-4">
          {servicesData.map((service, index) => (
            <div key={service.id} className="col-lg-4 col-md-6">
              <div className="service-card card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="service-icon mb-3">
                    <i className={`${service.icon} text-primary`}></i>
                  </div>
                  <h5 className="service-title card-title">{service.title}</h5>
                  <p className="service-description card-text text-muted">
                    {service.description}
                  </p>
                  <ul className="service-features list-unstyled">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="service-feature">
                        <i className="fas fa-check text-success me-2"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
