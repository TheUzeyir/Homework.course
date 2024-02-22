import React, { useState } from 'react';
import style from "./appMain.module.css"
import { FaRegLightbulb } from "react-icons/fa6";
import { IoIosArrowUp } from "react-icons/io";
import { FaPlus } from "react-icons/fa";
import FeedBackBox from "../feedBackBox/FeedBackBox";

const AppMain = () => {
  const [feedBackBox, setFeedBackBox] = useState(["suggestion1", "suggestion2", "suggestion3"]);
  const [showTextarea, setShowTextarea] = useState(true);

  const toggleTextarea = () => {
    setShowTextarea(!showTextarea);
  };


  return (
    <div className={style.appMain}>
      <div className={style.appMainBox_header}>
        <div className={style.appMainBox_header_left}>
          <FaRegLightbulb /> {feedBackBox.length} Suggestions
        </div>
        <div className={style.appMainBox_header_center}>
          Sort by:<span className={style.appMainBox_header_center_filterBox}>Most Upvotes</span><IoIosArrowUp/>
        </div>
        <div className={style.appMainBox_header_right}>
          <button className={style.appMainBox_header_right_btn} onClick={toggleTextarea}>
            <FaPlus className={style.appMainBox_header_right_btn_icon}/>Add Feedback
          </button>
        </div>
      </div>
      {showTextarea && (
       <>
        <FeedBackBox/>
        <FeedBackBox/>
        <FeedBackBox/>
       </> 
      )}
    </div>
  );
};

export default AppMain;
