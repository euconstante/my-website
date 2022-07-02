import * as React from "react";

import "./styles.css";

const Card = ({ image, description, link }) => {
  return (
    <div className="card-container">
      <a href={link} target="_blank">
        <div>
          <img className="card-image" src={image} />
          <p className="card-description">{description}</p>
        </div>
      </a>
    </div>
  );
};

export default Card;
