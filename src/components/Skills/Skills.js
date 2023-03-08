import React, { useState } from "react";
import "./Skills.css";
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";
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
    img: "https://img.icons8.com/color/344/sass.png",
    name: "SASS",
  },
  {
    img: "https://portfolio-8f8ea.firebaseapp.com/static/media/tailwind.e47ac876b8d4d0bba47a.png",
    name: "TAILWIND",
  },
  {
    img: "https://portfolio-8f8ea.firebaseapp.com/static/media/javascript.1ccd6ef9bb1f9c84ef00.png",
    name: "JS",
  },
  {
    img: "https://portfolio-8f8ea.firebaseapp.com/static/media/node.952a9ea986dcfa5229ad.png",
    name: "NODEJS",
  },
  {
    img: "https://portfolio-8f8ea.firebaseapp.com/static/media/react.0cf951a69d8e58f83f9d.png",
    name: "REACT",
  },
  {
    img: "https://portfolio-8f8ea.firebaseapp.com/static/media/github.3b9e32903aa89111875d.png",
    name: "GITHUB",
  },
];
function Skills() {
  const [selected, setSelected] = useState(0);
  const carruselL = () => {
    if (selected === 0) {
      return data[6].img;
    } else if (selected === 1) {
      return data[7].img;
    } else return data[selected - 2].img;
  };
  const carruselR = () => {
    if (selected === 7) {
      return data[1].img;
    } else if (selected === 6) {
      return data[0].img;
    } else return data[selected + 2].img;
  };
  const girarL = () => {
    if (selected === 0) {
      setSelected(6);
    } else if (selected === 1) {
      setSelected(7);
    } else setSelected(selected - 2);
  };
  const girarR = () => {
    if (selected === 7) {
      setSelected(1);
    } else if (selected === 6) {
      setSelected(0);
    } else setSelected(selected + 2);
  };
  return (
    <section id="skills">
      <h5>my knowledge</h5>
      <h2>Skills</h2>
      <div className="icons__container">
        <article>
          <img src={carruselL()} onClick={() => girarL()} />
        </article>
        <article>
          <img
            onClick={() =>
              selected === 0 ? setSelected(8) : setSelected(selected - 1)
            }
            src={selected === 0 ? data[8].img : data[selected - 1].img}
            alt=""
          />
        </article>
        <article>
          <img src={data[selected].img} alt="" />
          <span>{data[selected].name}</span>
        </article>
        <article>
          <img
            onClick={() =>
              selected === 8 ? setSelected(0) : setSelected(selected + 1)
            }
            src={selected === 8 ? data[0].img : data[selected + 1].img}
            alt=""
          />
        </article>
        <article>
          <img src={carruselR()} onClick={() => girarR()} />
        </article>
      </div>
      <div className="arrow-container">
        <img
          src={leftArrow}
          alt=""
          onClick={() =>
            selected === 0 ? setSelected(8) : setSelected(selected - 1)
          }
        />
        <img
          src={rightArrow}
          alt=""
          onClick={() =>
            selected === 8 ? setSelected(0) : setSelected(selected + 1)
          }
        />
      </div>
    </section>
  );
}

export default Skills;
