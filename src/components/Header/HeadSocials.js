import React from "react";
import { BsLinkedin, BsInstagram } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
function HeadSocials() {
  return (
    <div className="header__socials">
      <a
        className="linked"
        href="https://www.linkedin.com/in/emiliano-barea-monetti-781a00231/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a className="github" href="https://github.com/emibarea" target="_blank">
        <FaGithub />
      </a>
      <a
        className="yutu"
        href="https://www.youtube.com/channel/UCsmruGgvypq9GvmzMdUbfIg"
        target="_blank"
      >
        <FiYoutube />
      </a>
      <a
        className="insta"
        href="https://www.instagram.com/bareaemiliano/"
        target="_blank"
      >
        <BsInstagram />
      </a>
    </div>
  );
}

export default HeadSocials;
