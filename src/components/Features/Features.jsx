import React from "react";
import "./Features.scss";
import marketing from "../../assets/images/marketing.png";
import publicity from "../../assets/images/publicity.png";
import { ReactComponent as Arrow } from "../../assets/svg/arrow_forward.svg";
import { Link } from "react-router-dom";

const Features = () => {
  return (
    <section className="features">
      <article className="features__container container">
        <div className="features__container-content">
          <h2 className="features__title">
            Reaching your Audience is not as Complicated as You Think 🥺.
          </h2>
          <p className="features__text">
            Terabyte empowers business owners across Africa to grow and expand
            their reach like never before. With thousands of Affiliates, you can
            sell your products with ease and convenience, set your affiliate
            commission and leave the rest to us.
          </p>
          <Link to="/" className="feature__btn">
            <span>Join Terabyte Now!</span>
            <Arrow />
          </Link>
        </div>

        <div className="features__container-image order">
          <img src={marketing} alt="marketing" />
        </div>
      </article>

      <article className="features__container container margin">
        <div className="features__container-image">
          <img src={publicity} alt="publicity" />
        </div>

        <div className="features__container-content">
          <h2 className="features__title">
            Think Win-Win 🤑, Earn Some Dollars Selling Other People’s Products
          </h2>
          <p className="features__text">
            At Terabyte, your business is in good hands. With a verified product
            marketplace, and a secured payment methods, you can become a top
            performing affiliates, and we are here to support your growth all
            the way.
          </p>
          <Link to="/" className="feature__btn">
            <span>Join Terabyte Now!</span>
            <Arrow />
          </Link>
        </div>
      </article>
    </section>
  );
};

export default Features;
