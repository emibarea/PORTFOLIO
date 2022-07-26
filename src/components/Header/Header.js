import React from "react";
import "./Header.css";
import CTA from "./CTA";
import Me from "../../assets/emiDef.png";
import HeadSocials from "./HeadSocials";
function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Emiliano Barea Monetti</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <CTA />
        <HeadSocials />
        <div className="me">
          <img src={Me} alt="me" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}

export default Header;
