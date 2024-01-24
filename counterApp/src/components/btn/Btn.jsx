import React from 'react'
import "./btn.css"

const Btn = (props) => {
  const {btnText,type,handleClick}=props
  return (
      <button className={`btn ${type}`} onClick={handleClick}>{btnText}</button>
  )
}

export default Btn
