import * as React from "react";
import LogoIcon from "../assets/icons/Logo_bithrasher_1.svg";
import LogoIconBlack from "../assets/icons/Logo_bithrasher_1.2.svg";
import LogoIconSimple from "../assets/icons/Logo_bithrasher_2.svg";
import LogoIconWhite from "../assets/icons/Logo_bithrasher_2.1.svg";
import LogoIconPurple from "../assets/icons/Logo_bithrasher_2.3.svg";
import BulletIcon from "../assets/icons/Logo_bithrasher_3.svg";
import AboutFigure from "../assets/images/Foto_bithrasher.png";
import AboutColab from "../assets/images/colab.png";
import SquidGif from "../assets/images/giphy.gif";
import JavaScriptLogo from "../assets/icons/javascript.svg";
import TypeScriptLogo from "../assets/icons/typescript.svg";
import HtmlLogo from "../assets/icons/html.png";
import CssLogo from "../assets/icons/css.png";
import ReactLogo from "../assets/icons/react.svg";
import ReduxLogo from "../assets/icons/redux.svg";

import Card from "../components/card";
import "../styles/styles.css";

const hardSkills = [
  JavaScriptLogo,
  TypeScriptLogo,
  HtmlLogo,
  CssLogo,
  ReactLogo,
  ReduxLogo,
];

const projectsList = [
  { icon: BulletIcon, title: "Refera", description: "bla bla bla bla" },
  { icon: BulletIcon, title: "AngelUS", description: "bla bla bla bla" },
  { icon: BulletIcon, title: "Trybe", description: "bla bla bla bla" },
];

const IndexPage = () => {
  return (
    <div className="index_page">
      <header className="page_header">
        <title>Bianca Constante portifolio</title>
        <nav className="page_header-nav">
          <a href="#about" className="page_header-nav-links">
            ABOUT
          </a>
          <a href="#projects" className="page_header-nav-links">
            PROJECTS
          </a>
          <a href="#skills" className="page_header-nav-links">
            HARD SKILLS
          </a>
          <a href="#contact" className="page_header-nav-links">
            CONTACT
          </a>
        </nav>
        <img
          className="page_header-logo"
          src={LogoIcon}
          alt="Bianca Constante logo"
        />
      </header>
      <main className="page_main">
        <article className="page_main-grid">
          <section id="about" className="page_main-about-container">
            <div className="page_main-about-content">
              <img
                src={LogoIconBlack}
                alt="Bianca Constante logo"
                className="page_main-about-logo"
              />
              <img
                src={AboutFigure}
                alt="Bianca Constante"
                className="page_main-about-figure"
              />
            </div>
            <p className="page_main-about-text">
              Front end developer and Materials engineer based in Brazil.
              Motivated by new challenges, curiosity,criativity and connections.
              Value the diversity, commitment and respect. Play as a team
              understanding that people are different. I am currently working as
              a Front end Developer at Trybe, Belo Horizonte, Brazil.
            </p>
          </section>
          <section className="page_main-cool-about-container">
            <img
              src={LogoIconWhite}
              alt="Bianca Constante logo"
              className="page_main-cool-logo"
            />
            <div className="page_main-cool-about-content">
              <p className="page_main-cool-text">
                Heavily inspired by national rap and on my spare time I dance
                some braking and Hip hop when. My favorite TV shows types are
                comedies and criminal investigations. Some fun facts: I play
                clarinet, draw some realistc stuff and I used to make glasses.{" "}
              </p>
              <div className="page_main-cool-figures">
                <img
                  src={AboutColab}
                  alt="Bianca selection"
                  className="page_main-cool-selection"
                />
                <img
                  src={SquidGif}
                  alt="Bianca Constante logo"
                  className="page_main-squid-gif"
                />
              </div>
            </div>
          </section>
          <section id="projects" className="page_main-content-projects">
            <img
              src={LogoIconSimple}
              alt="Bianca Constante logo"
              className="page_main-cool-logo"
            />
            <h2 className="page_main-projects-title">Projects</h2>
            <div className="page_main-projects-list">
              {projectsList.map((item) => {
                return (
                  <Card
                    icon={item.icon}
                    title={item.title}
                    description={item.description}
                  />
                );
              })}
            </div>
          </section>
          <section id="skills" className="page_main-skills-container">
            <img
              src={LogoIconPurple}
              alt="Bianca Constante logo"
              className="page_main-cool-logo"
            />
            <h3>Hard Skills</h3>
            <div className="page_main-skills-content">
              {hardSkills.map((item) => {
                return (
                  <img
                    src={item}
                    alt="Hard skills logo"
                    className="page_main-skills-logo"
                  />
                );
              })}
            </div>
            <div className="page_main-skills-content--mobile">
              {hardSkills.slice(0, 3).map((item) => {
                return (
                  <img
                    src={item}
                    alt="Hard skills logo"
                    className="page_main-skills-logo"
                  />
                );
              })}
            </div>
            <div className="page_main-skills-content--mobile">
              {hardSkills.slice(4, 6).map((item) => {
                return (
                  <img
                    src={item}
                    alt="Hard skills logo"
                    className="page_main-skills-logo"
                  />
                );
              })}
            </div>
          </section>
        </article>
      </main>
      <footer id="contact" className="page_footer">
        <p>Developed by Bianca Constante. Designed by Rodrigo Neves</p>
        <div className="page_footer-links">
          <a
            href="https://www.linkedin.com/in/biancaguedert/"
            target="_blank"
            className="footer-contact-link"
          >
            Linkedin
          </a>
          <a
            href="https://github.com/euconstante"
            target="_blank"
            className="footer-contact-link"
          >
            GitHub
          </a>
        </div>
      </footer>
    </div>
  );
};

export default IndexPage;
