import React from "react";
import "./Portfolio.css";
import Netflix from "../../assets/netflixClone.png";
import Calculadora from "../../assets/calculadora.png";
import TICTACTOE from "../../assets/tictactoe.png";
import Coinbase from "../../assets/coinbase.png";
import Legos from "../../assets/legos.png";
import Instagram from "../../assets/instagram.png";
import gym from "../../assets/gym.png";
import Spotify from "../../assets/spotify.png";
const data = [
  {
    name: "Netflix Clone",
    img: Netflix,
    github: "https://github.com/emibarea/Netflix-Clone",
    demo: "https://netflix-clone-sigma-teal.vercel.app/",
  },
  {
    name: "Spotify Clone",
    img: Spotify,
    github: "https://github.com/emibarea/Spotify-Clone",
    demo: "https://spotify-clone-five-vert.vercel.app/",
  },
  {
    name: "Instagram Clone",
    img: Instagram,
    github: "https://github.com/Ignagim/instagram-clone",
    demo: "https://instagram-clone-emibarea.vercel.app/",
  },
  {
    name: "CoinBase Clone",
    img: Coinbase,
    github: "https://github.com/emibarea/Coinbase-clone",
    demo: "https://youtu.be/7oLPRUbBl_Q",
  },
  {
    name: "GYM Website",
    img: gym,
    github: "https://github.com/emibarea/GYM-website",
    demo: "https://gym-website-plum.vercel.app/",
  },
  {
    name: "Static Page Legos",
    img: Legos,
    github: "https://github.com/emibarea/LEGOS-HERO",
    demo: "https://emibarea.github.io/LEGOS-HERO/#",
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
