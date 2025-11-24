import React from "react";
import "./HomeWhoWeAre.css";

const HomeWhoWeAre = () => {
  const servicesData = [
    {
      id: 1,
      number: "01",
      title: "Product Engineering",
      description:
        "Leverage our expertise in software for app development, mobile app development platforms, and custom software development to advance your product. We excel in web, mobile, UI/UX, legacy modernization, and ongoing support, utilizing agile development methodologies.",
    },
    {
      id: 2,
      number: "02",
      title: "Data Services",
      description:
        "Unlock the power of your data with our comprehensive solutions, including big data analytics, visualization, and business intelligence. We offer predictive modeling, data warehousing, integration, and governance tailored to your specific needs.",
    },
    {
      id: 3,
      number: "03",
      title: "Cloud Services",
      description:
        "Revolutionize your operations with our cloud offerings. From infrastructure management and migration to security and DevSecOps, we ensure agile, scalable, and efficient cloud environments.",
    },
    {
      id: 4,
      number: "04",
      title: "AI & Machine Learning Services",
      description:
        "Stay ahead with our AI and ML expertise. We develop custom AI/ML solutions, language models, generative AI, and automation strategies to drive your business's technological capabilities forward.",
    },
    {
      id: 5,
      number: "05",
      title: "Healthcare IT Solutions",
      description:
        "Transform healthcare delivery with our innovative IT solutions for Healthcare ISVs. We streamline workflows, enhance efficiency, and improve patient care in the connected healthcare ecosystem.",
    },
    {
      id: 6,
      number: "06",
      title: "Staff Augmentation",
      description:
        "Expand your team with our staff augmentation services. We supply skilled professionals who integrate smoothly into your projects, offering flexibility, expertise, and cost-effective solutions to achieve your business goals.",
    },
  ];

  const handleLearnMore = (serviceId) => {
    console.log("Learn more clicked for service:", serviceId);
  };

  return (
    <section className="who-we-are-section">
      <div className="container">
        {/* Title Section */}
        <div className="section-header">
          <h2 className="section-title">WHO WE ARE</h2>
        </div>

        {/* Heading 1 Section */}
        <div className="heading-section">
          <h1 className="main-heading">
            Khandora – Your Premier Digital Solution Partner
          </h1>
          <p className="heading-description">
            At Khandora, we're not just another software development company.
            We're a boutique IT studio dedicated to delivering tailored
            technology solutions that transform businesses. Khandora is a
            leading custom software development company, specializing in
            innovative digital solutions that drive business transformation. As
            one of the top mobile app development firms, we deliver cutting-edge
            software services tailored to your unique needs.
          </p>
        </div>

        {/* Heading 2 Section */}
        <div className="heading-section">
          <h1 className="main-heading">
            Comprehensive Digital Solutions for Every Need
          </h1>
          <p className="heading-description">
            As a top-rated software development company, we're dedicated to
            delivering high-performance web applications, innovative mobile app
            development, scalable cloud solutions, advanced data analytics
            services, and AI-driven software systems. Our agile development
            methodologies and commitment to quality ensure we create solutions
            that drive your business forward.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {servicesData.map((service) => (
            <div key={service.id} className="service">
              <div className="service-content-wrapper">
                <div className="service-number-section">
                  <span className="service-number">{service.number}</span>
                  <span className="service-number-line">——</span>
                </div>
                <div className="service-content">
                  <h2 className="service-title">{service.title}</h2>
                  <div className="service-description-container">
                    <p className="service-description">{service.description}</p>
                  </div>
                  <div className="service-button-container">
                    <button
                      className="learn-more-btn"
                      onClick={() => handleLearnMore(service.id)}
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeWhoWeAre;
