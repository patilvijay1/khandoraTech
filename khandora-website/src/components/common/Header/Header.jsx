import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import "./Header.css";
import { useApp } from "../../../context/AppContext";
import logo from "../../../assets/logo2.png";
import { Menu, X } from "react-feather";

const Header = () => {
  const { mobileMenuOpen, toggleMobileMenu } = useApp();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header fixed-top ${isScrolled ? "scrolled" : ""}`}>
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container-fluid">
          {" "}
          {/* Changed from container to container-fluid */}
          {/* Logo - Left aligned */}
          <Link className="navbar-brand" to="/">
            <img
              style={{
                width: isScrolled ? "160px" : "200px",
                height: isScrolled ? "50px" : "60px",
                objectFit: "contain",
                transition: "all 0.3s ease-in-out",
              }}
              src={logo}
              alt="Khandora Technologies"
              className="header-logo"
              onError={(e) => {
                e.target.src =
                  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjYwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iNjAiIGZpbGw9IiMwMDcyQzYiLz48dGV4dCB4PSIxMDAiIHk9IjMwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+S2hhbmRvcmEgVGVjaDwvdGV4dD48L3N2Zz4=";
              }}
            />
          </Link>
          {/* Mobile menu toggle */}
          <div className="mobile-toggle">
            {mobileMenuOpen ? (
              <X onClick={toggleMobileMenu} size={28} />
            ) : (
              <Menu onClick={toggleMobileMenu} size={28} />
            )}
          </div>
          {/* Navbar - Right aligned */}
          <div
            className={`collapse navbar-collapse ${
              mobileMenuOpen ? "show" : ""
            }`}
            id="navbarNav"
          >
            <Navbar currentPath={location.pathname} />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
