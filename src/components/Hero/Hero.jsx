import React, { useState, useEffect } from "react";
import "./Hero.scss";
import { Link } from "react-router-dom";
import { carouselData } from "../../data/data";

const Hero = () => {


  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextSlide = (currentSlide + 1) % carouselData.length;
      setCurrentSlide(nextSlide);
    }, 5000);

    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSlide, carouselData.length]);

  return (
    <section className="hero">
      <article className="hero__container container">
        <div className="hero__container-content">
          <h1 className="hero__title">
            <span>{carouselData[currentSlide].title}</span>{" "}
            {carouselData[currentSlide].titlespan}
          </h1>
          <p className="hero__text">{carouselData[currentSlide].text}</p>
          <Link to="/" className="hero__btn-container">
            <button className="hero__btn">Join Terabyte Now!</button>
          </Link>
        </div>

        <div className="hero__container-image">
          <img src={carouselData[currentSlide].image} alt="hero" />
        </div>
      </article>
    </section>
  );
};

export default Hero;
