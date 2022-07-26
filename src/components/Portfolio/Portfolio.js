import React from "react";
import "./Portfolio.css";
import Netflix from "../../assets/netflixClone.png";
import Calculadora from "../../assets/calculadora.png";
import TICTACTOE from "../../assets/tictactoe.png";
const data = [
  {
    name: "Netflix Clone",
    img: Netflix,
    github: "https://github.com/emibarea/Netflix-Clone",
    demo: "https://netflix-clone-sigma-teal.vercel.app/",
  },
  {
    name: " JavaScript Calculator",
    img: Calculadora,
    github: "https://github.com/emibarea/Calculadora",
    demo: "https://emibarea.github.io/Calculadora/",
  },
  {
    name: "TIC-TAC-TOE",
    img: TICTACTOE,
    github: "https://github.com/emibarea/TIC-TAC-TOE",
    demo: "https://tic-tac-toe-alpha-gilt.vercel.app/",
  },
];
function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map((proyect) => (
          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={proyect.img} alt={proyect.name} />
            </div>
            <h3>{proyect.name}</h3>
            <div className="portfolio__item-cta">
              <a href={proyect.github} target="_blank" className="btn">
                GitHub
              </a>
              <a
                href={proyect.demo}
                target="_blank"
                className="btn btn-primary"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
