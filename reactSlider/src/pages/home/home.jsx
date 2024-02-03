import React from 'react';
import "./home.css";
import {sliderData} from "../../data/sliderData"
import Slider from "../../components/slider/slider.jsx"


const home = () => {
  return (
    <>
    <div className='home'>
      <Slider data={sliderData}/>
    </div>
    </>
  );
}
 
export default home;
