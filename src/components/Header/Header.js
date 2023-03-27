import React from "react";
import "./Header.css";
import CTA from "./CTA";
import Me from "../../assets/emiFa.png";
import HeadSocials from "./HeadSocials";
import { motion } from "framer-motion";
function Header() {
  return (
    <section className="header" id="header">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
        >
          <h1 data-aos="zoom-out-down">Emiliano Barea Monetti</h1>
        </motion.div>
        <h5 className="text-light">Frontend Developer</h5>
        <CTA />
        <HeadSocials />
        <div className="me">
          <a href="#about">
            <img src={Me} alt="me" className="foto" />
          </a>
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </section>
  );
}

export default Header;
