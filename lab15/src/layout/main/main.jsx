import React from 'react'
import Card from "../../components/card/card.jsx"
import "./main.css"
import {Phone} from "../../components/data/data.jsx"

const main = () => {


  return (
    <div className="main_box">
      {Phone.map((props) => (
        <Card key={props.id} title={props.title} price={props.price} />
      ))}
    </div>
  );
};

export default main;