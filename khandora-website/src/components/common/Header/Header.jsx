import React from "react";
import { Link, useLocation } from "react-router-dom";
// import { useApp } from "../../../context/AppContext";
import Navbar from "./Navbar";
import "./Header.css";
import { useApp } from "../../../context/AppContext";
import logo from "../../../assets/logo.png";

const Header = () => {
  const { mobileMenuOpen, toggleMobileMenu } = useApp();
  const location = useLocation();

  return (
    <header className="header fixed-top">
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img
              src={logo}
              alt="Khandora Tech"
              className="header-logo"
              onError={(e) => {
                e.target.src =
                  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjUwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxNTAiIGhlaWdodD0iNTAiIGZpbGw9IiMwMDcyQzYiLz48dGV4dCB4PSI3NSIgeT0iMjUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIyMCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5LaGFuZG9yYTwvdGV4dD48L3N2Zz4=";
              }}
            />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleMobileMenu}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className={`collapse navbar-collapse ${
              mobileMenuOpen ? "show" : ""
            }`}
          >
            <Navbar currentPath={location.pathname} />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
