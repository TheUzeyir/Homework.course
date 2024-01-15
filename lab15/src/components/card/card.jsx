import React from 'react'
import './card.css'
import Btn from '../button/button.jsx'

const card = (props) => {
  return (
    <div className='cards'>
      <div className="card">
        <h3>{props.title}</h3>
        <p>{props.price}$</p>

        <Btn />
      </div>
    </div>
  );
};

export default card;
