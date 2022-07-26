import React from "react";
import "./Skills.css";
const data = [
  {
    img: "https://portfolio-8f8ea.firebaseapp.com/static/media/html.2ba4fabc69a89a8f71e6.png",
    name: "HTML",
  },
  {
    img: "https://portfolio-8f8ea.firebaseapp.com/static/media/css.69a82c2d9e45c933a9cb.png",
    name: "CSS",
  },
  {
    img: "https://portfolio-8f8ea.firebaseapp.com/static/media/javascript.1ccd6ef9bb1f9c84ef00.png",
    name: "JS",
  },
  {
    img: "https://portfolio-8f8ea.firebaseapp.com/static/media/react.0cf951a69d8e58f83f9d.png",
    name: "REACT",
  },
  {
    img: "https://portfolio-8f8ea.firebaseapp.com/static/media/github.3b9e32903aa89111875d.png",
    name: "GITHUB",
  },
  {
    img: "https://portfolio-8f8ea.firebaseapp.com/static/media/node.952a9ea986dcfa5229ad.png",
    name: "NODEJS",
  },
  {
    img: "https://img.icons8.com/color/344/sass.png",
    name: "SASS",
  },
  {
    img: "https://portfolio-8f8ea.firebaseapp.com/static/media/tailwind.e47ac876b8d4d0bba47a.png",
    name: "TAILWIND",
  },
];
function Skills() {
  return (
    <section id="skills">
      <h5>my knowledge</h5>
      <h2>Skills</h2>
      <div className="icons__container">
        {data.map((e) => (
          <article className="icon__container">
            <img src={e.img} alt={e.name} />
            <h2>{e.name}</h2>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;
