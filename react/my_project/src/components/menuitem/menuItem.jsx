import React from 'react';
import "./menuItem.css"

const MenuItem = (props) => {
  return (
    <div>
      <div className='menu'>
        <h2 className='h2'>{props.date}</h2>
        <h4 className='h4'>{props.title}</h4>
        <button className='btn'>{props.btn}</button>
      </div>
    </div>
  );
}

export default MenuItem;
