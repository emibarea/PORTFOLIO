import React, { useEffect, useRef, useMemo } from "react";
import "./About.css";
import Me from "../../assets/imagenEmi.jpeg";
import Platzi from "../../assets/img3.jpg";
import FreeCode from "../../assets/freecodecamp.png";
import PJP from "../../assets/pjp.jpg";
function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="about image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <a
                href="https://platzi.com/p/emibarea/ruta/6727-web/diploma/detalle/"
                target="_blank"
              >
                <img src={Platzi} alt="platzi certification" />
              </a>
            </article>
            <article className="about__card">
              <a
                href="https://freecodecamp.org/certification/EmilianoBarea/responsive-web-design"
                target="_blank"
              >
                <img src={FreeCode} alt="FreeCodeCamp certification" />
              </a>
            </article>
            <article className="about__card">
              <a
                href="https://platzi.com/p/emibarea/curso/1642-course/diploma/detalle/"
                target="_blank"
              >
                <img src={PJP} alt="platzi certification" />
              </a>
            </article>
          </div>
          <p>
            My name is Emiliano Barea, I'm 19 years old. I currently reside in
            Argentina, my native country. I have been studying Systems
            Engineering at Universidad Tecnologica Nacional Mendoza since 2020.
            I have also learned on other platforms (Platzi, FreeCodeCamp,
            ArgentinaPrograma) and on my own.
            <br /> I am passionate about programming, blockchain and technology
            in general. I define myself as a very proactive person that never
            stops learning, always in the search of improvement and growth. I'm
            capable to work in a group and establish good relationships with my
            partners
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
