import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineFolderOpen,
} from "react-icons/ai";
import { BiMessageSquareDetail, BiBook } from "react-icons/bi";
function Nav() {
  const [active, setActive] = useState("#header");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const menuItems = document.querySelectorAll("nav a");

    function onScroll() {
      let currentSectionIndex = 0;
      let currentSectionTop = 0;

      sections.forEach((section, index) => {
        const sectionTop = section.getBoundingClientRect().top;

        if (index === 0) {
          currentSectionTop = sectionTop;
        }

        if (sectionTop < window.innerHeight / 2) {
          currentSectionIndex = index;
          currentSectionTop = sectionTop;
        }
      });

      const currentSectionId = sections[currentSectionIndex].getAttribute("id");
      setActive(currentSectionId);

      menuItems.forEach((item) => {
        item.classList.remove("active");
        const href = item.getAttribute("href");
        if (href === `#${currentSectionId}`) {
          item.classList.add("active");
        }
      });
    }

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return (
    <nav>
      <a
        href="#skills"
        onClick={() => setActive("#skills")}
        className={active === "#skills" ? "active" : ""}
      >
        <BiBook />
      </a>
      <a
        href="#about"
        onClick={() => setActive("#about")}
        className={`${active === "#about" ? "active" : ""} prueba`}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#header"
        onClick={() => setActive("#header")}
        className={active === "#header" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>

      <a
        href="#portfolio"
        onClick={() => setActive("#portfolio")}
        className={active === "#portfolio" ? "active" : ""}
      >
        <AiOutlineFolderOpen />
      </a>
      <a
        href="#contact"
        onClick={() => setActive("#contact")}
        className={active === "#contact" ? "active" : ""}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
}

export default Nav;
