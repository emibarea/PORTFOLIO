import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
function HeadSocials() {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/emiliano-barea-monetti-781a00231/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/emibarea" target="_blank">
        <FaGithub />
      </a>
      <a href="https://www.instagram.com/bareaemiliano/" target="_blank">
        <BsInstagram />
      </a>
    </div>
  );
}

export default HeadSocials;
