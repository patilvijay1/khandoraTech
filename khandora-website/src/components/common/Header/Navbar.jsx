import React from "react";
import { Link } from "react-router-dom";
import { useApp } from "../../../context/AppContext";
import "./Navbar.css";

const Navbar = ({ currentPath, isTransparent }) => {
  const { toggleMobileMenu } = useApp();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/products", label: "Products" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  const handleNavClick = () => {
    toggleMobileMenu();
  };

  return (
    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      {navItems.map((item, index) => (
        <li key={item.path} className="nav-item">
          <Link
            className={`nav-link nav-link-animated ${
              currentPath === item.path ? "active" : ""
            } ${isTransparent ? "text-white" : ""}`}
            to={item.path}
            onClick={handleNavClick}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {item.label}
            <span className="nav-link-underline"></span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
