import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import logo from "../../../assets/Khandora-Tech-Logo.png";

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light pt-5 pb-4">
      <div className="container-fluid">
        <div className="row">
          {/* Left Section - Brand Info */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="footer-brand-section">
              <img
                src={logo}
                alt="Khandora Logo"
                className="footer-logo mb-3"
              />
              <p className="footer-text">
                Providing premium products and exceptional services to help your
                business grow and succeed in the digital world.
              </p>
            </div>
          </div>

          {/* Middle Section - Contact Info */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="footer-contact-section">
              <h6 className="footer-title mb-3">Contact Info</h6>
              <div className="contact-info">
                <div className="contact-item d-flex align-items-start mb-3">
                  <i className="fas fa-map-marker-alt mt-1 me-3"></i>
                  <span className="footer-text">
                    123 Business Street, City, State 12345
                  </span>
                </div>
                <div className="contact-item d-flex align-items-center mb-3">
                  <i className="fas fa-phone me-3"></i>
                  <span className="footer-text">+1 (555) 123-4567</span>
                </div>
                <div className="contact-item d-flex align-items-center mb-3">
                  <i className="fas fa-envelope me-3"></i>
                  <span className="footer-text">info@khandora.com</span>
                </div>
                {/* Social Links */}
                <div className="footer-social-section">
                  <div className="social-links">
                    <a href="#" className="social-link" aria-label="Facebook">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" className="social-link" aria-label="Twitter">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="social-link" aria-label="LinkedIn">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="#" className="social-link" aria-label="Instagram">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Links and Social */}
          <div className="col-lg-4 col-md-12">
            <div className="row">
              <div className="col-sm-6 col-6 mb-4">
                <h6 className="footer-title mb-3">Quick Links</h6>
                <ul className="footer-links list-unstyled">
                  <li>
                    <Link to="/" className="footer-link">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/services" className="footer-link">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link to="/products" className="footer-link">
                      Products
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" className="footer-link">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="footer-link">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="col-sm-6 col-6 mb-4">
                <h6 className="footer-title mb-3">Services</h6>
                <ul className="footer-links list-unstyled">
                  <li>
                    <a href="#" className="footer-link">
                      Web Development
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer-link">
                      Mobile Apps
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer-link">
                      Digital Marketing
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer-link">
                      Cloud Solutions
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer-link">
                      Consulting
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-secondary my-4" />

        <div className="row align-items-center">
          <div className="col-md-6 text-md-end">
            <div className="footer-bottom-links">
              <p className="footer-copyright mb-0">
                &copy; 2025 Khandora Technologies. All rights reserved.
              </p>
              {/* <a href="#" className="footer-link me-3">
                Privacy Policy
              </a>
              <a href="#" className="footer-link">
                Terms of Service
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
