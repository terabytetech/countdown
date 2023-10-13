import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Eclipse from "../../assets/images/Ellipse.png";
import LogoWhite from "../../assets/svg/logo-White.svg";
import Youtube from "../../assets/svg/Youtube.svg";
import Twitter from "../../assets/svg/Twitter.svg";
import Facebook from "../../assets/svg/Facebook.svg";
import Instagram from "../../assets/svg/Instagram.svg";
import Linkedin from "../../assets/svg/Linkedin.svg";
import { ReactComponent as Less } from "../../assets/svg/expand_less.svg";
import { ReactComponent as More } from "../../assets/svg/expand_more.svg";
import { menuItems } from "../../data/data";
import "./Footer.scss";

const Footer = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [openItemIndex, setOpenItemIndex] = useState(0);

  const checkIsMobile = () => {
    setIsMobile(window.innerWidth < 1024);
  };

  useEffect(() => {
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  const toggleDropdown = (index) => {
    if (isMobile) {
      if (openItemIndex === index) {
        setOpenItemIndex(null);
      } else {
        setOpenItemIndex(index);
      }
    }
  };

  return (
    <footer className="footer">
      <img src={Eclipse} alt="" className="footer__bcg" />
      <section className="footer__container container">
        <div className="footer__logo">
          <Link to="/">
            <img src={LogoWhite} alt="Logo" />
          </Link>

          <div className="footer__socials">
            <Link to="https://youtube.com">
              <img src={Youtube} alt="Youtube" />
            </Link>

            <Link to="https://twitter.com">
              <img src={Twitter} alt="Twitter" />
            </Link>

            <Link to="https://facebook.com">
              <img src={Facebook} alt="Facebook" />
            </Link>

            <Link to="https://instagram.com">
              <img src={Instagram} alt="Instagram" />
            </Link>

            <Link to="https://linkedin.com">
              <img src={Linkedin} alt="Linkedin" />
            </Link>
          </div>
        </div>

        <div
          className={
            isMobile
              ? "footer__container--contents--lists-dropdown"
              : "footer__container--contents--lists"
          }
        >
          {menuItems.map((menuItem, index) => (
            <div
              key={index}
              className="footer__container--contents--item"
              onClick={() => toggleDropdown(index)}
            >
              <div className="footer__container--contents--menu">
                <h3>{menuItem.title}</h3>
                <div className="footer__container--contents--menu-icon">
                  {openItemIndex === index ? (
                    <Less onClick={() => toggleDropdown(index)} />
                  ) : (
                    <More onClick={() => toggleDropdown(index)} />
                  )}
                </div>
              </div>
              <ul className={`${openItemIndex === index ? "open" : "closed"}`}>
                {menuItem.links.map((link, linkIndex) => (
                  <li key={linkIndex}>{link}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <div className="footer__container--contents--bottom">
        <p>© 2023 Terabyte. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
