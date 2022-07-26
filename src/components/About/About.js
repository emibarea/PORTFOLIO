import React, { useEffect, useRef, useMemo } from "react";
import "./About.css";
import Me from "../../assets/imagenEmi.jpeg";
import Platzi from "../../assets/img3.jpg";
import FreeCode from "../../assets/freecodecamp.png";
import PJP from "../../assets/pjp.jpg";
import Google from "../../assets/2022-08-19 (2).png";
import frontend from "../../assets/2022-08-19 (3).png";
import argPrograma from "../../assets/argentina_programa_2022_page-0001.jpg";
const data = [
  {
    img: Platzi,
    name: "platzi certification",
    link: "https://platzi.com/p/emibarea/ruta/6727-web/diploma/detalle/",
  },
  {
    img: PJP,
    name: "platzi javascript certification",
    link: "https://platzi.com/p/emibarea/curso/1642-course/diploma/detalle/",
  },
  {
    img: frontend,
    name: "platzi frontend certification",
    link: "https://platzi.com/p/emibarea/curso/2467-frontend-developer/diploma/detalle/",
  },
  {
    img: FreeCode,
    name: "free code camp certification",
    link: "https://freecodecamp.org/certification/EmilianoBarea/responsive-web-design",
  },
  {
    img: Google,
    name: "google certification",
    link: "https://learndigital.withgoogle.com/link/1nur091p2ww",
  },
  {
    img: argPrograma,
    name: "Argentina Programa",
    link: "https://seprogramar.inti.gob.ar/inti/certificates/verify/L45SAs5-Xw9XNbgl",
  },
];
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
            {data.map((certificado) => (
              <article className="about__card">
                <a href={certificado.link} target="_blank">
                  <img src={certificado.img} alt={certificado.name} />
                </a>
              </article>
            ))}
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
