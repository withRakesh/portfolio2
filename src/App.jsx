import React from "react";
import "./index.css";
import Header from "./components/header/Header";
import { Hero } from "./components/hero/Hero";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import TechStack from "./components/techstack/TechStack";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
