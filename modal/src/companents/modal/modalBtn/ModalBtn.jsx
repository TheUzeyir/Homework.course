import React from 'react'
import "./modalBtn.css"

const modalBtn = (props) => {
    const {btnText,type,handleClick}=props
  return (
    <button className={`btn ${type}`} onClick={handleClick}>{btnText}</button>
  )
}


export default modalBtn
 