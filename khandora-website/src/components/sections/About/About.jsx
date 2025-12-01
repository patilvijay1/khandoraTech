import React from "react";
import "./About.css";
import ourTeamImg from "../../../assets/OurTeam.avif";
import ourTeamWorkPlaceImg from "../../../assets/Work-Place.jpg";
import workProgressImg from "../../../assets/WorkProgress.avif";
import HomeGuidingPrinciples from "../../../pages/HomeGuidingPrinciples/HomeGuidingPrinciples";

const About = () => {
  const skills = [
    { name: "HTML/CSS", percentage: 90 },
    { name: "JavaScript", percentage: 85 },
    { name: "React.js", percentage: 88 },
    { name: "React Native", percentage: 80 },
    { name: "Node.js", percentage: 82 },
    { name: "PHP", percentage: 40 },
    { name: "Express.js", percentage: 78 },
    { name: "Bootstrap", percentage: 92 },
  ];

  const workProcess = [
    {
      title: "Requirement Analysis",
    },
    {
      title: "System Design",
    },
    {
      title: "Development",
    },
    {
      title: "Testing",
    },
    {
      title: "Support",
    },
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title fade-in">Who We Are</h1>
          <p className="hero-subtitle fade-in-delay">
            Crafting Digital Excellence Through Innovation
          </p>
        </div>
      </section>

      {/* About Content Section */}
      <section className="about-content-section py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="images-container">
                <div className="main-image slide-in-left">
                  <img src={ourTeamImg} alt="Our Team" className="img-fluid" />
                </div>
                <div className="overlay-image slide-in-left-delay">
                  <img
                    src={ourTeamWorkPlaceImg}
                    alt="Our Workplace"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="content-wrapper fade-in-right">
                <h2 className="section-title">About Khandora</h2>
                <p className="lead-text">
                  Founded with a vision to revolutionize the digital landscape,
                  Khandora has been at the forefront of providing innovative
                  solutions to businesses worldwide.
                </p>
                <p className="description-text">
                  Our team of experienced professionals is dedicated to
                  delivering exceptional products and services that drive growth
                  and success for our clients. We combine cutting-edge
                  technology with creative solutions to build digital
                  experiences that matter.
                </p>

                <div className="features-grid">
                  <div className="feature-item">
                    <i className="fas fa-check-circle"></i>
                    <span>Quality Assurance</span>
                  </div>
                  <div className="feature-item">
                    <i className="fas fa-check-circle"></i>
                    <span>Expert Team</span>
                  </div>
                  <div className="feature-item">
                    <i className="fas fa-check-circle"></i>
                    <span>Support 24/7</span>
                  </div>
                  <div className="feature-item">
                    <i className="fas fa-check-circle"></i>
                    <span>Affordable Pricing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <HomeGuidingPrinciples />
      </section>

      {/* Skills Section */}
      <section className="skills-section py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="section-title">Our Skills</h2>
              <p className="section-subtitle">
                Mastering the technologies that power modern web applications
              </p>
            </div>
          </div>
          <div className="row">
            {skills.map((skill, index) => (
              <div key={skill.name} className="col-lg-6 mb-4">
                <div
                  className="skill-item fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">
                      {skill.percentage}%
                    </span>
                  </div>
                  <div className="skill-bar">
                    <div
                      className="skill-progress"
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Process Section */}
      <section className="process-section py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="process-image slide-in-left">
                <img
                  src={workProgressImg}
                  alt="Our Work Process"
                  className="img-fluid rounded"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="process-content fade-in-right">
                <h2 className="section-title">Our Work Process</h2>
                <p className="section-subtitle">
                  We are working on diffrent technologies with talented and
                  smart team.
                </p>

                <div className="process-steps">
                  {workProcess.map((process, index) => (
                    <div key={process.step} className="process-step">
                      <div className="step-content">
                        <h4 className="step-title">{process.title}</h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
