import React from "react";
import "./HomeElevatingBusinesses.css";
import img1 from "../../assets/expertTeam-img.jpg";
import img2 from "../../assets/innovation-img.jpg";
import img3 from "../../assets/quality-img.jpg";

const HomeElevatingBusinesses = () => {
  const servicesData = [
    {
      id: 1,
      title: "Beyond Code- Strategic IT Solutions",
      description:
        "We're not just developers - we're your strategic partners. Our unique blend of industry insight and technical expertise ensures solutions that drive real business growth.",
      bgImage: img1,
    },
    {
      id: 2,
      title: "Where IT Innovation Thrive",
      description:
        "Every project is an opportunity to push boundaries. Our innovation lab turns cutting-edge concepts into practical, game-changing solutions for your business.",
      bgImage: img2,
    },
    {
      id: 3,
      title: "Digital Marketing",
      description:
        "Don't just take our word for it. Explore how we've transformed businesses across industries, from startups to enterprises",
      bgImage: img3,
    },
  ];

  return (
    <section className="home-elevating-businesses py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h1 className="home-elevating-businesses__title">
              Elevating Businesses Through Innovative IT Solutions At Khandora
              Technologies
            </h1>
            <p className="home-elevating-businesses__subtitle">
              we go beyond traditional software development. Our unique approach
              combines strategic partnership, cutting-edge innovation, and
              proven success to transform your business challenges into
              opportunities for growth.
            </p>
          </div>
        </div>
        <div className="row g-4">
          {servicesData?.map((service, index) => (
            <div key={service.id} className="col-lg-4 col-md-6">
              <div className="home-elevating-businesses__card card h-100 border-0 shadow-sm">
                <div
                  className="home-elevating-businesses__card-bg"
                  style={{ backgroundImage: `url(${service.bgImage})` }}
                ></div>
                <div className="home-elevating-businesses__card-content card-body p-4">
                  <div className="home-elevating-businesses__card-header">
                    <h5 className="home-elevating-businesses__card-title card-title">
                      {service.title}
                    </h5>
                  </div>
                  <div className="home-elevating-businesses__card-body">
                    <p className="home-elevating-businesses__card-description card-text">
                      {service.description}
                    </p>
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

export default HomeElevatingBusinesses;
