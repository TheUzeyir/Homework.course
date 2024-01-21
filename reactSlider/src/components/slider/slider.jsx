
import React,{useState} from 'react';

import { GrChapterPrevious, GrChapterNext } from 'react-icons/gr';

import "./slider.css"

const Slider = ({ data }) => {
  const [counter, setCounter] = useState(0);

  function onIncrementCounter(){
   if(counter===data.lenght-1){
    setCounter(0)
   }
        setCounter((prev)=>prev+1)
  }


  function onDecrementCounter(){
    if(counter<=0){
        setCounter(data.lenght-1)
    }

        setCounter((prev)=>prev-1)
  }


  return (
    <div className='slider'>
      <GrChapterPrevious className='slider_btn' onClick={onDecrementCounter}/>
      <div className='slider_img'>
        <img src={data[counter]} alt={`image-${counter}`} />
      </div>
      <GrChapterNext className='slider_btn' onClick={onIncrementCounter}/>
    </div>
  );
}

export default Slider;

