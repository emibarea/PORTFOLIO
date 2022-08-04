import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Portfolio from "./components/Portfolio/Portfolio";
import Footer from "./components/Footer/Footer";
import Skills from "./components/Skills/Skills";
function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
