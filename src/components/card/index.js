import * as React from "react";

import "./styles.css";

const Card = ({ icon, image, title, description }) => {
  return (
    <div className="card-container">
      <img className="card-icon" src={icon} />
      <img className="card-description" src={image} />
      <h1 className="card-title">{title}</h1>
      <p className="card-description">{description}</p>
    </div>
  );
};

export default Card;
