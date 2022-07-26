import React, { useState } from "react";
import "./Nav.css";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineFolderOpen,
} from "react-icons/ai";
import { BiMessageSquareDetail, BiBook } from "react-icons/bi";
function Nav() {
  const [active, setActive] = useState("#");
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
        className={active === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#"
        onClick={() => setActive("#")}
        className={active === "#" ? "active" : ""}
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
