import React, { useState, useEffect } from "react";
import "./HomeCarousel.css";
import InnovativeImg from "../../assets/innovation-img.jpg";
import QualityImg from "../../assets/quality-img.jpg";
import ExpartTeamImg from "../../assets/expertTeam-img.jpg";
import { ChevronLeft, ChevronRight } from "react-feather";

const HomeCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: InnovativeImg,
      title: "Innovative Solutions",
      description: "Cutting-edge technology for modern businesses",
      fallback:
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI2MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iIzAwN2RmZiIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMzYiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+SW5ub3ZhdGl2ZSBTb2x1dGlvbnM8L3RleHQ+PC9zdmc+",
    },
    {
      id: 2,
      image: QualityImg,
      title: "Quality Services",
      description: "Exceptional services that drive your business forward",
      fallback:
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI2MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI2ZlNjYyNiIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMzYiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+UXVhbGl0eSBTZXJ2aWNlczwvdGV4dD48L3N2Zz4=",
    },
    {
      id: 3,
      image: ExpartTeamImg,
      title: "Expert Team",
      description: "Professional team dedicated to your success",
      fallback:
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI2MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iIzAwN2RmZiIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMzYiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+RXhwZXJ0IFRlYW08L3RleHQ+PC9zdmc+",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="carousel-section">
      <div className="carousel-container">
        <div className="carousel">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`carousel-slide ${
                index === currentSlide ? "active" : ""
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="carousel-image"
                onError={(e) => {
                  e.target.src = slide.fallback;
                }}
              />
              <div className="carousel-overlay"></div>
              <div className="carousel-content">
                <div className="carousel-content-inner">
                  <h2 className="carousel-title">{slide.title}</h2>
                  <p className="carousel-description">{slide.description}</p>
                  {/* ! Get Started Button */}
                  {/* <button className="carousel-btn btn btn-primary btn-lg">
                    Get Started
                  </button> */}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ! Carousel Controls */}
        {/* <button className="carousel-control prev" onClick={prevSlide}>
          <ChevronLeft size={32} />
        </button>
        <button className="carousel-control next" onClick={nextSlide}>
          <ChevronRight size={32} />
        </button> */}

        {/* Carousel Indicators */}
        <div className="carousel-indicators ">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? "active" : ""}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeCarousel;
