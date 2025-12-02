import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useApp } from "../../../context/AppContext";
import { ChevronDown, ArrowRight } from "react-feather";
import "./Navbar.css";

const Navbar = ({ currentPath, isTransparent }) => {
  const { toggleMobileMenu } = useApp();
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);
  const navItemRef = useRef(null);
  const closeTimeoutRef = useRef(null);

  const navItems = [
    {
      path: "/",
      label: "Home",
    },
    {
      path: "/about",
      label: "About",
    },
    {
      label: "Services",
      hasDropdown: true,
      icon: "🛠️",
      submenu: [
        {
          path: "/services/software-development",
          label: "Software Development",
          desc: "Custom software solutions",
        },
        {
          path: "/services/mobile-app-development",
          label: "Mobile App Development",
          desc: "iOS & Android apps",
        },
        {
          path: "/services/website-development",
          label: "Website Development",
          desc: "Responsive websites",
        },
        {
          path: "/services/cloud-solutions",
          label: "Cloud Solutions",
          desc: "Cloud infrastructure",
        },
        {
          path: "/services/ui-ux-design",
          label: "UI/UX Design",
          desc: "User experience design",
        },
        {
          path: "/services/it-consulting",
          label: "IT Consulting",
          desc: "Expert IT guidance",
        },
      ],
    },
    {
      label: "Products",
      hasDropdown: true,
      icon: "📦",
      submenu: [
        {
          path: "/products/erp",
          label: "ERP Solutions",
          desc: "Enterprise resource planning",
        },
        {
          path: "/products/crm",
          label: "CRM Software",
          desc: "Customer relationship management",
        },
        {
          path: "/products/inventory",
          label: "Inventory Management",
          desc: "Stock control systems",
        },
        {
          path: "/products/analytics",
          label: "Analytics Tools",
          desc: "Data analysis platform",
        },
      ],
    },

    {
      path: "/contact",
      label: "Contact",
    },
  ];

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  const handleNavClick = () => {
    toggleMobileMenu();
    setHoveredMenu(null);
    setIsDropdownVisible(false);
  };

  const handleSubmenuClick = (e, item) => {
    if (item.hasDropdown) {
      e.preventDefault();
      if (window.innerWidth <= 991) {
        setHoveredMenu(hoveredMenu === item.label ? null : item.label);
      }
    } else {
      handleNavClick();
    }
  };

  const handleMouseEnter = (item) => {
    // Clear any pending close timeout
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }

    if (item.hasDropdown) {
      setHoveredMenu(item.label);
      setIsDropdownVisible(true);
    }
  };

  const handleMouseLeave = (e) => {
    // Only close if mouse left both the nav item AND the dropdown
    const relatedTarget = e.relatedTarget;
    const isLeavingToDropdown = dropdownRef.current?.contains(relatedTarget);
    const isLeavingToNavItem = navItemRef.current?.contains(relatedTarget);

    if (!isLeavingToDropdown && !isLeavingToNavItem) {
      closeTimeoutRef.current = setTimeout(() => {
        setHoveredMenu(null);
        setIsDropdownVisible(false);
      }, 300); // 300ms delay for better UX
    }
  };

  const handleDropdownMouseEnter = () => {
    // Clear any pending close timeout when entering dropdown
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  const handleDropdownMouseLeave = (e) => {
    // Check if mouse is leaving dropdown to nav item
    const relatedTarget = e.relatedTarget;
    const isLeavingToNavItem = navItemRef.current?.contains(relatedTarget);

    if (!isLeavingToNavItem) {
      closeTimeoutRef.current = setTimeout(() => {
        setHoveredMenu(null);
        setIsDropdownVisible(false);
      }, 300);
    }
  };

  const isActive = (item) => {
    if (item.path) return currentPath === item.path;

    if (item.hasDropdown && item.submenu) {
      return item.submenu.some((subItem) => currentPath === subItem.path);
    }

    return false;
  };

  return (
    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      {navItems.map((item, index) => (
        <li
          key={item.label}
          className={`nav-item ${item.hasDropdown ? "dropdown" : ""}`}
          onMouseEnter={() => handleMouseEnter(item)}
          onMouseLeave={handleMouseLeave}
          ref={navItemRef}
        >
          {item.hasDropdown ? (
            <>
              <a
                className={`nav-link nav-link-animated dropdown-toggle ${
                  isActive(item) ? "active" : ""
                } ${isTransparent ? "text-white" : ""}`}
                href="#"
                onClick={(e) => handleSubmenuClick(e, item)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* {item.icon && <span className="nav-icon">{item.icon}</span>} */}
                {item.label}
                {/* <ChevronDown size={16} className="dropdown-chevron ms-1" /> */}
                <span className="nav-link-underline"></span>
              </a>

              {/* Desktop Dropdown */}
              <div
                className={`dropdown-menu ${
                  hoveredMenu === item.label && isDropdownVisible ? "show" : ""
                }`}
                onMouseEnter={handleDropdownMouseEnter}
                onMouseLeave={handleDropdownMouseLeave}
                ref={dropdownRef}
              >
                <div className="dropdown-header">
                  <h6>{item.label}</h6>
                  <p className="dropdown-subtitle">
                    Explore our {item.label.toLowerCase()}
                  </p>
                </div>
                <div className="dropdown-divider"></div>
                <div className="dropdown-items-container">
                  {item.submenu.map((subItem) => (
                    <Link
                      key={subItem.path}
                      className={`dropdown-item ${
                        currentPath === subItem.path ? "active" : ""
                      }`}
                      to={subItem.path}
                      onClick={handleNavClick}
                    >
                      <div className="dropdown-item-content">
                        <div className="dropdown-item-text">
                          <span className="dropdown-item-title">
                            {subItem.label}
                          </span>
                          {subItem.desc && (
                            <span className="dropdown-item-desc">
                              {subItem.desc}
                            </span>
                          )}
                        </div>
                        <ArrowRight size={16} className="dropdown-item-arrow" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile Dropdown */}
              <div
                className={`mobile-submenu ${
                  hoveredMenu === item.label ? "show" : ""
                }`}
              >
                {item.submenu.map((subItem) => (
                  <Link
                    key={subItem.path}
                    className={`mobile-dropdown-item ${
                      currentPath === subItem.path ? "active" : ""
                    }`}
                    to={subItem.path}
                    onClick={handleNavClick}
                  >
                    <div className="mobile-dropdown-item-content">
                      <span className="mobile-dropdown-item-title">
                        {subItem.label}
                      </span>
                      {subItem.desc && (
                        <span className="mobile-dropdown-item-desc">
                          {subItem.desc}
                        </span>
                      )}
                    </div>
                    <ArrowRight size={16} />
                  </Link>
                ))}
              </div>
            </>
          ) : (
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
          )}
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
