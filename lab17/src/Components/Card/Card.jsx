import React, { useState } from "react";
import { animalsImg } from "../Data/dataSvg.jsx";
import "./card.css";

const Card = ({ title }) => {
  const [size, setSize] = useState(50);

  function handlerScale() {
    setSize((prev) => prev + 10);
  }

  return (
    <>
      <div className="img_box">
        <img src={animalsImg[title]} alt="" />
        <img
          onClick={handlerScale}
          className="heart_img"
          src="src/assets/images/heart.svg"
          alt=""
          style={{ width: `${size}px` }}
        />
        <span>{title}</span>
      </div>
    </>
  );
};

export default Card;
