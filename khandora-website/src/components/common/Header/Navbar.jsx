import React from "react";
import { Link } from "react-router-dom";
import { useApp } from "../../../context/AppContext";
// import { useApp } from "../../../context/AppContext";

const Navbar = ({ currentPath }) => {
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
      {navItems.map((item) => (
        <li key={item.path} className="nav-item">
          <Link
            className={`nav-link ${currentPath === item.path ? "active" : ""}`}
            to={item.path}
            onClick={handleNavClick}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
