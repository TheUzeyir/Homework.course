import React, { useState } from "react";
import './App.css'
import Card from './Components/Card/Card'


const App = () => {
  const animalsData = ["bird", "cat", "cow", "dog", "gator", "horse"];

  function getRandomAnimal() {
    return animalsData[Math.floor(Math.random() * animalsData.length)];
  }

  const [animals, setAnimals] = useState([]);

  function clickRandom() {
    setAnimals([...animals, getRandomAnimal()]);
  }

  return (
    <>
      <button className="btn" onClick={clickRandom}>
        Get random animals
      </button>
      <div className="app">
        {animals.map((title, index) => {
          return <Card title={title} key={index} />;
        })}        
      </div>
    </>
  );
};

export default App
