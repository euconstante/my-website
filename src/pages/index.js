import * as React from "react";
import LogoIcon from "../assets/icons/Logo_bithrasher_1.svg";
import LogoIconBlack from "../assets/icons/Logo_bithrasher_1.2.svg";
import LogoIconSimple from "../assets/icons/Logo_bithrasher_2.svg";
import AboutFigure from "../assets/images/Foto_bithrasher.png";
import SquidGif from "../assets/images/giphy.gif";
import JavaScriptLogo from "../assets/icons/javascript.svg";
import TypeScriptLogo from "../assets/icons/typescript.svg";
import HtmlLogo from "../assets/icons/html.png";
import CssLogo from "../assets/icons/css.png";
import ReactLogo from "../assets/icons/react.svg";
import ReduxLogo from "../assets/icons/redux.svg";
import TailwindLogo from "../assets/icons/tailwind.svg";
import "../styles/styles.css";

const hardSkills = [
  JavaScriptLogo,
  TypeScriptLogo,
  HtmlLogo,
  CssLogo,
  ReactLogo,
  ReduxLogo,
  TailwindLogo,
];

const IndexPage = () => {
  return (
    <div className="index_page">
      <header className="page_header">
        <title>Bianca Constante portifolio</title>
        <img
          className="page_header-logo"
          src={LogoIcon}
          alt="Bianca Constante logo"
        />
      </header>
      <main className="page_main">
        <article className="page_main-content">
          <section className="page_main-about-container">
            <div className="page_main-about">
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
                Vestibulum ac nunc ex. Nunc eu viverra orci. Proin ante elit,
                lobortis sit amet quam in, efficitur laoreet massa. Etiam
                eleifend tempor nisi ac hendrerit. Cras et dapibus sem. Nullam
                id gravida arcu. Mauris tempus quis quam eu feugiat. Curabitur
                ut euismod tortor. Donec ornare nisl purus, ut porta sem
                tristique in. Maecenas fermentum condimentum nulla, vitae congue
                enim malesuada nec. Donec vehicula consectetur lorem non mollis.
                Ut placerat pulvinar leo.
              </p>
            </div>
          </section>
          <section className="page_main-cool-about-container">
            <img
              src={LogoIconSimple}
              alt="Bianca Constante logo"
              className="page_main-cool-logo"
            />
            <div className="page_main-cool-about-content">
              <p>
                Vestibulum ac nunc ex. Nunc eu viverra orci. Proin ante elit,
                lobortis sit amet quam in, efficitur laoreet massa. Etiam
                eleifend tempor nisi ac hendrerit. Cras et dapibus sem. Nullam
                id gravida arcu. Mauris tempus quis quam eu feugiat. Curabitur
                ut euismod tortor. Donec ornare nisl purus, ut porta sem
                tristique in. Maecenas fermentum condimentum nulla, vitae congue
                enim malesuada nec. Donec vehicula consectetur lorem non mollis.
                Ut placerat pulvinar leo.
              </p>
              <img
                src={SquidGif}
                alt="Bianca Constante logo"
                className="page_main-cool-logo"
              />
            </div>
          </section>
          <section className="page_main-content-projects">
            <img
              src={LogoIconSimple}
              alt="Bianca Constante logo"
              className="page_main-cool-logo"
            />
            <h2>Projects</h2>
            <ul>
              <li>Link 1</li>
              <li>Link 2</li>
              <li>Link 3</li>
              <li>Link 4</li>
            </ul>
          </section>
          <section className="page_main-skills-container">
            <div className="page_main-skills-content">
              <h3>Hard Skills</h3>
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
          </section>
        </article>
      </main>
      <footer className="page_footer">Footer</footer>
    </div>
  );
};

export default IndexPage;
