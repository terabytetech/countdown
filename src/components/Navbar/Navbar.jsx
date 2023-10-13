import { useState, useEffect, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import { NavLinks } from "../../data/data";
import logo from "../../assets/svg/Logo.svg";
import { ReactComponent as Close } from "../../assets/svg/close.svg";
import { ReactComponent as Menu } from "../../assets/svg/menu.svg";
import "./Navbar.scss";

import { BtnLogin, Button } from "../../components/Button";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [toggle, setToggle] = useState(false);
  const navMenu = useRef(null);

  useEffect(() => {
    showLinks
      ? navMenu.current.classList.add("show-menu")
      : navMenu.current.classList.remove("show-menu");
  }, [showLinks]);

  const toggleNav = () => {
    setShowLinks(!showLinks);
    setToggle(!toggle);
  };

  const navLinkClose = () => {
    setShowLinks(false);
    setToggle(!toggle);
  };

  return (
    <header className="nav">
      <nav className="nav__container container">
        <div className="nav__toggle">
          <button className="nav__btn" onClick={toggleNav}>
            {!toggle ? <Menu /> : <Close />}
          </button>
        </div>

        <Link to="/" className="nav__logo">
          <img src={logo} alt="Nav logo" />
        </Link>

        <div className="nav__menu" ref={navMenu}>
          <ul className="nav__list">
            {NavLinks.map((link) => {
              const { id, url, text } = link;
              return (
                <li className="nav__item" key={id}>
                  <NavLink
                    to={url}
                    className="nav__link"
                    onClick={navLinkClose}
                  >
                    {text}
                  </NavLink>
                </li>
              );
            })}
            <div className="nav__btn-container-mobile">
              <Button text="Join Terabyte" />
              <BtnLogin text="Sign In" />
            </div>
          </ul>
        </div>

        <div className="nav__btn-container">
          <Button text="Join Terabyte" />
          <BtnLogin text="Sign In" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
