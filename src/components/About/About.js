import React from "react";
import "./About.css";
import Me from "../../assets/imagenEmi.jpeg";
import Platzi from "../../assets/img3.jpg";
import FreeCode from "../../assets/freecodecamp.png";
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
          </div>
          <p>
            My name is Emiliano Barea, I'm 19 years old. I currently reside in
            Argentina, my native country. I have been studying Systems
            Engineering at Universidad Tecnologica Nacional Mendoza since 2020.
            I have also learned on other platforms (Platzi, FreeCodeCamp,
            ArgentinaPrograma) and on my own.
            <br /> I am a passionate about building amazing websites and a
            person who never stops learning. I would define myself as a very
            adaptable , who is capable to work in any sircunstances, and is an
            amazing coworker.
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
