import React from 'react'
import "./main.css"
import img1 from "./img/andras-vas-Bd7gNnWJBkU-unsplash.jpg"
import Btn from "./button/button.jsx"


const main = () => {
      
    return (
    <div>
        <img src={img1} alt="" />
        <div className='main_text'>
            <h1>Enchange your potential</h1>
            <p>We make learning engaging & effective,so that you are ready to achive your goals</p>

            <Btn/>
        </div>
    </div>
  )
}

export default main
