import * as React from "react";
import LogoIcon from "../assets/icons/Logo_bithrasher_1.svg";
import LogoIconBlack from "../assets/icons/Logo_bithrasher_1.2.svg";
import LogoIconSimple from "../assets/icons/Logo_bithrasher_2.svg";
import LogoIconWhite from "../assets/icons/Logo_bithrasher_2.1.svg";
import LogoIconPurple from "../assets/icons/Logo_bithrasher_2.3.svg";
import AboutFigure from "../assets/images/Foto_bithrasher.png";
import AboutColab from "../assets/images/colab.png";
import SquidGif from "../assets/images/giphy.gif";
import JavaScriptLogo from "../assets/icons/javascript.svg";
import TypeScriptLogo from "../assets/icons/typescript.svg";
import HtmlLogo from "../assets/icons/html.png";
import CssLogo from "../assets/icons/css.png";
import ReactLogo from "../assets/icons/react.svg";
import ReduxLogo from "../assets/icons/redux.svg";
import ReferaLogo from "../assets/images/refera.png";
import AngelUS from "../assets/images/angelus.png";
import Trybe from "../assets/images/trybe.png";

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
  {
    image: ReferaLogo,
    description: `Refera is a company that operates in real estate market connecting agents and service providers. I worked as part of JungleDevs team developing new features, fixing bugs and helping in the continuous improvement of the product.`,
    link: "https://refera.com.br/",
  },
  {
    image: AngelUS,
    description: `AngelUS is a company that helps women become more engaged in their professional careers.I worked as part of JungleDevs team developing new features, fixing bugs and helping in the continuous improvement of the product.`,
    link: "https://www.angelus.network/",
  },
  {
    image: Trybe,
    description:
      "Trybe is a web development school with the genuine purpose of generating more opportunities for people. I'm currently working here with the development web team building new features, tests, fixing bugs and actively participating in Squad agile ceremonies.",
    link: "https://www.betrybe.com/",
  },
];

const IndexPage = () => {
  return (
    <div className="index_page">
      <header id="home" className="page_header">
        <title>Bianca Constante</title>
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
              Motivated by new challenges, curiosity, criativity and
              connections. Value diversity, commitment and respect. Play as a
              team understanding that people are different. <br />
              <br />I am currently working as a Front end Developer at{" "}
              <span className="text--bold">Trybe, Belo Horizonte, Brazil.</span>
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
                Heavily inspired by Brazilian music and in my spare time I dance
                some Breaking and Hip hop. My favorite TV shows types are
                comedies and criminal investigations. <br />
                <br />
                <span className="text--bold">Some fun facts:</span> I play
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
                    image={item.image}
                    link={item.link}
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
          <a
            href="mailto:constanteguedert@gmail.com"
            target="_blank"
            className="footer-contact-link"
          >
            E-mail
          </a>
        </div>
        <p className="footer_text">
          Developed by{" "}
          <a className="contact-link" href="#home">
            Bianca Constante
          </a>
          . Designed by{" "}
          <a
            className="contact-link"
            href="https://rodrigoneves.myportfolio.com/"
            target="_blank"
          >
            Rodrigo Neves
          </a>
          .
        </p>
      </footer>
    </div>
  );
};

export default IndexPage;
