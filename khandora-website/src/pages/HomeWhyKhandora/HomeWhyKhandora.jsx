// HomeWhyKhandora.jsx
import React from "react";
import "./HomeWhyKhandora.css";

const HomeWhyKhandora = () => {
  const principles = [
    {
      icon: "💎",
      label: "We Listen and Understand",
      description:
        "Our approach begins with empathetic understanding of your goals and challenges.",
    },
    {
      icon: "🚀",
      label: "Customized Solutions",
      description:
        "We craft innovative, scalable software solutions aligned with your strategic objectives.",
    },
    {
      icon: "🤝",
      label: "Collaborative Partnership",
      description:
        "We become an integral part of your team, fostering synergy and open communication.",
    },
    {
      icon: "🔮",
      label: "Innovation & Future Driven Mindset",
      description:
        "We leverage cutting-edge technologies to deliver transformative, impactful, and future-proof change.",
    },
    {
      icon: "🔄",
      label: "Agile and Iterative Approach",
      description:
        "Our software methodology embraces flexibility and continuous improvement.",
    },
    {
      icon: "📚",
      label: "Knowledge Transfer and Empowerment",
      description:
        "We build your internal capabilities through training and knowledge sharing.",
    },
  ];

  return (
    <div className="guiding-principles-container">
      <div className="header-section">
        <h1 className="main-title">
          Why Choose LogicLoom for Your Software Development Needs?
        </h1>
        <p>
          <p className="heading-description">
            At LogicLoom, we’re a team of seasoned software engineers dedicated
            to create high-quality, scalable, and innovative digital solutions
            tailored to address our clients’ unique challenges and capitalize on
            their opportunities. We’re committed to pushing the boundaries of
            technology to propel your business forward in the digital landscape.
          </p>
        </p>
      </div>

      <div className="principles-grid">
        {principles.map((principle, index) => (
          <div className="principle-card" key={index}>
            <div className="card-content">
              <div className="card-front">
                <div className="principle-icon">{principle.icon}</div>
                <span className="principle-label">{principle.label}</span>
              </div>
              <div className="card-back">
                <p className="principle-description">{principle.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeWhyKhandora;
