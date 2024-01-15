import React from 'react'
import Card from "../../components/card/card.jsx"
import "./main.css"

const main = () => {
  const Phone = [
    {
      title: "sony",
      price: 529,
      id: 1,
    },
    {
      title: "Mi",
      price: 541,
      id: 2,
    },
    {
      title: "iphone",
      price: 2000,
      id: 3,
    },
    {
      title: "nokia",
      price: "pulsuz",
      id: 4,
    },
    {
      title: "redmie",
      price: 5288,
      id: 5,
    },
  ];

  return (
    <div className="main_box">
      {Phone.map((props) => (
        <Card key={props.id} title={props.title} price={props.price} />
      ))}
    </div>
  );
};

export default main;
