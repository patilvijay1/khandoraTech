import React, { useState } from "react";
import { validateEmail } from "../../../utils/helpers";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!validateEmail(formData.email))
      newErrors.email = "Invalid email format";
    if (!formData.contact.trim()) newErrors.contact = "Contact is required";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsSubmitting(false);
      return;
    }

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("Form submitted:", formData);
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", contact: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section className="contact-section py-5 bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-8">
            <div className="text-center mb-5">
              <h2
                className="display-5 fw-bold text-primary mb-3 animate-fade-in"
                style={{ animationDelay: "0.1s" }}
              >
                Get In Touch
              </h2>
              <p
                className="lead text-muted animate-fade-in"
                style={{ animationDelay: "0.2s" }}
              >
                Have a project in mind? We'd love to hear from you. Send us a
                message and we'll respond as soon as possible.
              </p>
            </div>

            <div className="contact-form-wrapper">
              <div
                className="card border-0 shadow-lg rounded-3 overflow-hidden animate-slide-up"
                style={{ animationDelay: "0.3s" }}
              >
                <div className="card-body p-5">
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-6">
                        <div
                          className="form-group mb-4 animate-fade-in"
                          style={{ animationDelay: "0.4s" }}
                        >
                          {/* <label
                            htmlFor="name"
                            className="form-label fw-semibold text-dark text-start d-block"
                          >
                            Full Name *
                          </label> */}
                          <input
                            type="text"
                            className={`form-control ${
                              errors.name ? "is-invalid border-2" : "border-1"
                            }`}
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Name"
                            style={{
                              backgroundColor: "#f8f9fa",
                              borderBottom: "2px solid #e9ecef",
                              borderRadius: "0.5rem 0.5rem 0 0",
                            }}
                          />
                          {errors.name && (
                            <div className="invalid-feedback d-block mt-2 animate-shake">
                              <i className="fas fa-exclamation-circle me-2"></i>
                              {errors.name}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div
                          className="form-group mb-4 animate-fade-in"
                          style={{ animationDelay: "0.5s" }}
                        >
                          {/* <label
                            htmlFor="email"
                            className="form-label fw-semibold text-dark text-start d-block"
                          >
                            Email Address *
                          </label> */}
                          <input
                            type="email"
                            className={`form-control ${
                              errors.email ? "is-invalid border-2" : "border-1"
                            }`}
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email"
                            style={{
                              backgroundColor: "#f8f9fa",
                              borderBottom: "2px solid #e9ecef",
                              borderRadius: "0.5rem 0.5rem 0 0",
                            }}
                          />
                          {errors.email && (
                            <div className="invalid-feedback d-block mt-2 animate-shake">
                              <i className="fas fa-exclamation-circle me-2"></i>
                              {errors.email}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6">
                        <div
                          className="form-group mb-4 animate-fade-in"
                          style={{ animationDelay: "0.6s" }}
                        >
                          {/* <label
                            htmlFor="contact"
                            className="form-label fw-semibold text-dark text-start d-block"
                          >
                            Contact Number *
                          </label> */}
                          <input
                            type="text"
                            className={`form-control ${
                              errors.contact
                                ? "is-invalid border-2"
                                : "border-1"
                            }`}
                            id="contact"
                            name="contact"
                            value={formData.contact}
                            onChange={handleChange}
                            placeholder="Contact"
                            style={{
                              backgroundColor: "#f8f9fa",
                              borderBottom: "2px solid #e9ecef",
                              borderRadius: "0.5rem 0.5rem 0 0",
                            }}
                          />
                          {errors.contact && (
                            <div className="invalid-feedback d-block mt-2 animate-shake">
                              <i className="fas fa-exclamation-circle me-2"></i>
                              {errors.contact}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div
                          className="form-group mb-4 animate-fade-in"
                          style={{ animationDelay: "0.7s" }}
                        >
                          {/* <label
                            htmlFor="subject"
                            className="form-label fw-semibold text-dark text-start d-block"
                          >
                            Subject *
                          </label> */}
                          <input
                            type="text"
                            className={`form-control ${
                              errors.subject
                                ? "is-invalid border-2"
                                : "border-1"
                            }`}
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="Subject"
                            style={{
                              backgroundColor: "#f8f9fa",
                              borderBottom: "2px solid #e9ecef",
                              borderRadius: "0.5rem 0.5rem 0 0",
                            }}
                          />
                          {errors.subject && (
                            <div className="invalid-feedback d-block mt-2 animate-shake">
                              <i className="fas fa-exclamation-circle me-2"></i>
                              {errors.subject}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    <div
                      className="form-group mb-4 animate-fade-in"
                      style={{ animationDelay: "0.8s" }}
                    >
                      {/* <label
                        htmlFor="message"
                        className="form-label fw-semibold text-dark text-start d-block"
                      >
                        Message *
                      </label> */}
                      <textarea
                        className={`form-control ${
                          errors.message ? "is-invalid border-2" : "border-1"
                        }`}
                        id="message"
                        name="message"
                        rows="6"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Message"
                        style={{
                          backgroundColor: "#f8f9fa",
                          borderBottom: "2px solid #e9ecef",
                          borderRadius: "0.5rem 0.5rem 0 0",
                          resize: "none",
                        }}
                      ></textarea>
                      {errors.message && (
                        <div className="invalid-feedback d-block mt-2 animate-shake">
                          <i className="fas fa-exclamation-circle me-2"></i>
                          {errors.message}
                        </div>
                      )}
                    </div>

                    <div
                      className="animate-fade-in"
                      style={{ animationDelay: "0.9s" }}
                    >
                      <button
                        type="submit"
                        className="btn btn-primary btn-lg w-100 py-3 fw-semibold"
                        disabled={isSubmitting}
                        style={{
                          backgroundColor: "#667eea",
                          border: "none",
                          borderRadius: "0.75rem",
                          fontSize: "1.1rem",
                          transition: "all 0.3s ease",
                        }}
                      >
                        {isSubmitting ? (
                          <>
                            <span
                              className="spinner-border spinner-border-sm me-2"
                              role="status"
                            ></span>
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message{" "}
                            <i className="fas fa-paper-plane ms-2"></i>
                          </>
                        )}
                      </button>
                    </div>

                    <div
                      className="text-center mt-3 animate-fade-in"
                      style={{ animationDelay: "1s" }}
                    >
                      <small className="text-muted">
                        <i className="fas fa-lock me-1"></i>
                        Your information is safe with us
                      </small>
                    </div>
                  </form>
                </div>
              </div>

              {/* Additional Info */}
              <div className="row mt-5">
                <div className="col-md-4 text-center">
                  <div
                    className="info-item animate-fade-in"
                    style={{ animationDelay: "1.1s" }}
                  >
                    <div
                      className="icon-wrapper bg-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                      style={{ width: "60px", height: "60px" }}
                    >
                      <i className="fas fa-phone text-white fs-5"></i>
                    </div>
                    <h6 className="fw-bold">Call Us</h6>
                    <p className="text-muted mb-0">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="col-md-4 text-center">
                  <div
                    className="info-item animate-fade-in"
                    style={{ animationDelay: "1.2s" }}
                  >
                    <div
                      className="icon-wrapper bg-success rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                      style={{ width: "60px", height: "60px" }}
                    >
                      <i className="fas fa-envelope text-white fs-5"></i>
                    </div>
                    <h6 className="fw-bold">Email Us</h6>
                    <p className="text-muted mb-0">hello@example.com</p>
                  </div>
                </div>
                <div className="col-md-4 text-center">
                  <div
                    className="info-item animate-fade-in"
                    style={{ animationDelay: "1.3s" }}
                  >
                    <div
                      className="icon-wrapper bg-warning rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                      style={{ width: "60px", height: "60px" }}
                    >
                      <i className="fas fa-clock text-white fs-5"></i>
                    </div>
                    <h6 className="fw-bold">Working Hours</h6>
                    <p className="text-muted mb-0">Mon - Fri: 9AM - 5PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-section {
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
          min-height: 100vh;
        }

        .form-control:focus {
          background-color: #fff !important;
          border-color: #667eea !important;
          box-shadow: 0 0 0 0.2rem rgba(102, 126, 234, 0.25) !important;
          border-bottom: 2px solid #667eea !important;
          transform: translateY(-2px);
        }

        .form-control {
          transition: all 0.3s ease;
        }

        .icon-wrapper {
          transition: transform 0.3s ease;
        }

        .info-item:hover .icon-wrapper {
          transform: translateY(-5px);
        }

        .card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .card:hover {
          transform: translateY(-5px);
        }

        /* Animations */
        .animate-fade-in {
          opacity: 0;
          animation: fadeIn 0.6s ease forwards;
        }

        .animate-slide-up {
          opacity: 0;
          transform: translateY(30px);
          animation: slideUp 0.6s ease forwards;
        }

        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes shake {
          0%,
          100% {
            transform: translateX(0);
          }
          25% {
            transform: translateX(-5px);
          }
          75% {
            transform: translateX(5px);
          }
        }

        /* Button hover effects */
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4) !important;
        }

        .btn-primary {
          transition: all 0.3s ease !important;
        }

        /* Label styling */
        .form-label {
          margin-bottom: 0.5rem;
          font-size: 0.95rem;
          color: #2d3748 !important;
        }

        /* Input focus animations */
        .form-group {
          position: relative;
        }

        .form-control:focus + .floating-label {
          transform: translateY(-25px) scale(0.85);
          color: #667eea;
        }
      `}</style>
    </section>
  );
};

export default Contact;
