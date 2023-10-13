import React from "react";
import "./CTA.scss";
import world from "../../assets/images/world.png";

const CTA = () => {
  return (
    <section className="cta">
      <article className="cta__container container">
        <div className="cta__container-content">
          <h2 className="cta__title">
            Join the #1 Fastest Growing Affiliate Network in Africa
          </h2>
          <p>
            Position yourself to reach your customers as a vendor. Earn in
            multiple currencies selling other people’s products as an affiliate.
          </p>
        </div>
        <div className="cta__container-image">
          <img src={world} alt="world" />
        </div>
        <div className="cta__container-btn flex">
          <button className="cta__btn">How it Works</button>
        </div>
      </article>
    </section>
  );
};

export default CTA;
