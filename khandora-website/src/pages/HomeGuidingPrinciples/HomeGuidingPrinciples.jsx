import React, { useState } from "react";
import "./HomeGuidingPrinciples.css";
import { ArrowDownRight, ArrowRight } from "react-feather";

function HomeGuidingPrinciples() {
  // 'vision' opened by default
  const [openItem, setOpenItem] = useState("vision");

  const toggle = (id) => {
    setOpenItem((prev) => (prev === id ? null : id));
  };

  return (
    <div className="guiding-principles-section">
      <div className="guiding-principles-container-fluid">
        <div className="guiding-content-section">
          <div className="content-inner">
            <h1>
              Our Guiding Principles for Delivering Exceptional IT Solutions
            </h1>

            <div className="vision-mission-container">
              {/* Vision */}
              <div className={`item ${openItem === "vision" ? "open" : ""}`}>
                <button
                  className="item-header"
                  onClick={() => toggle("vision")}
                  aria-expanded={openItem === "vision"}
                >
                  <h2>Vision</h2>
                  <span className="arrow">
                    {openItem === "vision" ? (
                      <ArrowDownRight size={18} />
                    ) : (
                      <ArrowRight size={18} />
                    )}
                  </span>
                </button>

                <div
                  className="item-content"
                  aria-hidden={openItem !== "vision"}
                >
                  <p>
                    To empower businesses through innovative IT solutions and
                    digital transformation.
                  </p>
                </div>
              </div>

              {/* Mission */}
              <div className={`item ${openItem === "mission" ? "open" : ""}`}>
                <button
                  className="item-header"
                  onClick={() => toggle("mission")}
                  aria-expanded={openItem === "mission"}
                >
                  <h2>Mission</h2>
                  <span className="arrow">
                    {openItem === "mission" ? (
                      <ArrowDownRight size={18} />
                    ) : (
                      <ArrowRight size={18} />
                    )}
                  </span>
                </button>

                <div
                  className="item-content"
                  aria-hidden={openItem !== "mission"}
                >
                  <p>
                    To deliver tailored IT solutions that address unique
                    business challenges through innovation and expertise.
                  </p>
                </div>
              </div>

              {/* Core Values */}
              <div className={`item ${openItem === "values" ? "open" : ""}`}>
                <button
                  className="item-header"
                  onClick={() => toggle("values")}
                  aria-expanded={openItem === "values"}
                >
                  <h2>Core Values</h2>
                  <span className="arrow">
                    {openItem === "values" ? (
                      <ArrowDownRight size={18} />
                    ) : (
                      <ArrowRight size={18} />
                    )}
                  </span>
                </button>

                <div
                  className="item-content"
                  aria-hidden={openItem !== "values"}
                >
                  <p>
                    Our core values of partnership, innovation, and trust drive
                    us to deliver exceptional IT solutions and build long-term
                    client relationships.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="image-section">
          <div className="image-wrapper"></div>
        </div>
      </div>
    </div>
  );
}

export default HomeGuidingPrinciples;
