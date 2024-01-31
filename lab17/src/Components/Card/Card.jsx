import React, { useState } from "react";
import { animalsImg } from "../Data/dataSvg.jsx";
import "./card.css";

const Card = ({ title }) => {
  const [size, setSize] = useState(50);

  function handleScale() {
    setSize((prev) => prev + 10);
  }

  return (
    <>
      <div className="img_boxes">
        <img src={animalsImg[title]} alt="animals" />
        <img
          onClick={handleScale}
          className="heart_imges"
          src="src/assets/images/heart.svg"
          alt=""
          style={{ width: `${size}px` }}
        />
        <p>{title}</p>
      </div>
    </>
  );
};

export default Card;
