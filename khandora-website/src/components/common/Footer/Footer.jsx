import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light pt-5 pb-4">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4">
            <h5 className="footer-brand mb-3">Khandora</h5>
            <p className="footer-text">
              Providing premium products and exceptional services to help your
              business grow and succeed in the digital world.
            </p>
            <div className="social-links">
              <a href="#" className="social-link">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-link">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-link">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="social-link">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-2 col-md-6 mb-4">
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

          <div className="col-lg-3 col-md-6 mb-4">
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

          <div className="col-lg-3 col-md-6 mb-4">
            <h6 className="footer-title mb-3">Contact Info</h6>
            <div className="contact-info">
              <p className="footer-text mb-2">
                <i className="fas fa-map-marker-alt me-2"></i>
                123 Business Street, City, State 12345
              </p>
              <p className="footer-text mb-2">
                <i className="fas fa-phone me-2"></i>
                +1 (555) 123-4567
              </p>
              <p className="footer-text mb-2">
                <i className="fas fa-envelope me-2"></i>
                info@khandora.com
              </p>
            </div>
          </div>
        </div>

        <hr className="border-light my-4" />

        <div className="row align-items-center">
          <div className="col-md-6">
            <p className="footer-copyright mb-0">
              &copy; 2024 Khandora. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-md-end">
            <div className="footer-bottom-links">
              <a href="#" className="footer-link me-3">
                Privacy Policy
              </a>
              <a href="#" className="footer-link">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
