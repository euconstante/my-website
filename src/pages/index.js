import * as React from "react";
import Lottie from "react-lottie";
import animationData from "../assets/animations/105936-gear-smile.json";

import "./styles.css";

const IndexPage = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <main className="index-page-container">
      <section className="index-page-content">
        <title>Home Page</title>
        <h1 className="index-page-title">Hi there!</h1>
        <p className="index-page-message">
          This site is going through a really
          <br />
          <span className="index-page-message_update">COOL UPDATE</span>
          <br />
          the new layout will be released on Friday 07.01.2022! If you need to
          talk to me please do it{" "}
          <a href="https://www.linkedin.com/in/biancaguedert/" target="_blank">
            here!
          </a>
        </p>
        <Lottie options={defaultOptions} height={400} width={400} />
      </section>
    </main>
  );
};

export default IndexPage;
