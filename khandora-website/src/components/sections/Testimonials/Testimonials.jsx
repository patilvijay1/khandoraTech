import React from "react";
import { testimonialsData } from "../../../data/testimonialsData";
// import "./Testimonials.css";

const Testimonials = () => {
  return (
    <section className="testimonials-section py-5 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className="section-title">What Our Clients Say</h2>
            <p className="section-subtitle">
              Don't just take our word for it - hear from some of our satisfied
              clients
            </p>
          </div>
        </div>
        <div className="row g-4">
          {testimonialsData.map((testimonial) => (
            <div key={testimonial.id} className="col-lg-4 col-md-6">
              <div className="testimonial-card card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <div className="testimonial-text">
                    <i className="fas fa-quote-left text-primary mb-3"></i>
                    <p className="card-text">{testimonial.text}</p>
                  </div>
                  <div className="testimonial-author mt-4">
                    <div className="author-info">
                      <h6 className="author-name mb-1">{testimonial.name}</h6>
                      <p className="author-company text-muted small">
                        {testimonial.company}
                      </p>
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

export default Testimonials;
