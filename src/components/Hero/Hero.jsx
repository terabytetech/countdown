import React from "react";
import "./Hero.scss";
import Logo from "../../assets/svg/logo.svg";
// import Form from "../Form/Form";
import CountDown from "../CountDown/CountDown";

const Hero = () => {
  return (
    <section className="hero">
      <article className="hero__container">
        <div className="hero__container--contents container flex">
          <div className="hero__container--contents__logo">
            <img src={Logo} alt="logo" />
          </div>

          <div className="hero__container--contents__text">
            <h1>We know you can’t wait!</h1>
            <p>
              we can’t too. <span>😊</span>
            </p>
          </div>
        </div>

        <div className="hero__container--countdown flex">
          <p className="countdown-text">So, let’s countdown together</p>
          <CountDown />
        </div>

        {/* <div className="hero__container--form flex">
          <Form />
        </div> */}
      </article>
    </section>
  );
};

export default Hero;
