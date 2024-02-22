import React from 'react'
import style from "./feedBackBox.module.css"
import { BiSolidMessageRounded } from "react-icons/bi";
import { IoIosArrowUp } from "react-icons/io";

const FeedBackBox = () => {
  return (
    <div className={style.feedBackBox}>
      <div className={style.feedBackBox_number}><IoIosArrowUp className={style.feedBackBox_number_icon}/>459</div>
       <div className={style.feedBackBox_info}>
        <div className={style.feedBackBox_info_title}>Lorem, ipsum dolor</div>
        <div className={style.feedBackBox_info_desc}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam.</div>
        <div><span className={style.feedBackBox_info_category}>Enchanment</span></div>
       </div>
        <div className={style.feedBackBox_comment}><BiSolidMessageRounded className={style.feedBackBox_comment_icon}/>
          <span className={style.feedBackBox_comment_number}>5</span>
        </div>
    </div>
  )
}

export default FeedBackBox
