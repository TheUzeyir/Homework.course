import React, { useState, useEffect } from 'react';
import style from "./appMain.module.css";
import { FaRegLightbulb } from "react-icons/fa6";
import { IoIosArrowUp } from "react-icons/io";
import { FaPlus } from "react-icons/fa";
import FeedBackBox from "../feedBackBox/FeedBackBox";
import Errorpage from '../errorpage/Errorpage';
import { useNavigate } from 'react-router-dom';
import AppFilter from '../app-filter/AppFilter';
import { useSelector } from 'react-redux';

const AppMain = () => {
  const feedBacks = useSelector(state => state.data.feedbacks);
  const navigate = useNavigate();
  const [showTextarea, setShowTextarea] = useState(true);

  const toggleTextarea = () => {
    setShowTextarea(feedBacks.length === 0);
  };

  useEffect(() => {
    toggleTextarea();
  }, [feedBacks]);

  return (
    <div className={style.appMain_box}>
      <AppFilter />
      <div className={style.appMain}>
        <div className={style.appMainBox_header}>
          <div className={style.appMainBox_header_left}>
            <FaRegLightbulb /> {feedBacks.length} Suggestions
          </div>
          <div className={style.appMainBox_header_center}>
            Sort by:<span className={style.appMainBox_header_center_filterBox}>Most Upvotes</span><IoIosArrowUp/>
          </div>
          <div className={style.appMainBox_header_right}>
            <button className={style.appMainBox_header_right_btn} onClick={() => navigate('createFeedBack')}>
              <FaPlus className={style.appMainBox_header_right_btn_icon} />Add Feedback
            </button>
          </div>
        </div>
        {showTextarea ? <Errorpage /> : feedBacks.map((feed, index) => (
          <FeedBackBox key={index} inputData={feed.inputData} textData={feed.textData} categoryData= {feed.categoryData}/>
        ))}
      </div>
    </div>
  );
};

export default AppMain;
