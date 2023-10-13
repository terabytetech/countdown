import React, { useState } from "react";
import "./Tab.scss";
import { ReactComponent as Arrow } from "../../assets/svg/arrow_forward.svg";
import { Link } from "react-router-dom";

const Tab = () => {
  const tabContent = [
    {
      title: "Set up an account with Terabyte Affiliate Network",
      buttonText: "Sign Up",
      buttonIcon: <Arrow />,
    },
    {
      title:
        "As an affiliate, pick a product from the marketplace. As a vendor, upload your products to the marketplace",
      buttonText: "Explore Marketplace",
    },
    {
      title: "Sell and Make Some Dollars💰! It is that simple",
      buttonText: "Try it Now!",
    },
  ];

  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="tab">
      <article className="tab__container container flex">
        <div className="tab__container-content">
          <h1 className="tab__title">
            Joining <span>Terabyte</span> can be as easy as{" "}
          </h1>
          <div className="tab__container-steps">
            {tabContent.map((tab, index) => (
              <button
                key={index}
                className={`tab__btn ${activeTab === index ? "active" : ""}`}
                onClick={() => setActiveTab(index)}
              >
                <span>{index + 1}</span>
              </button>
            ))}
          </div>

          <p className="tab__text">{tabContent[activeTab].title}</p>

          <Link to="/" className="tab__button">
            <span>{tabContent[activeTab].buttonText}</span>
            {tabContent[activeTab].buttonIcon}
          </Link>
        </div>
      </article>
    </section>
  );
};

export default Tab;
