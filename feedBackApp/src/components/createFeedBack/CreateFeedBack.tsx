import React, { useState } from 'react';
import style from "./createFeedBack.module.css";
import { IoMdArrowRoundDown,IoIosArrowBack } from "react-icons/io";
import plusImg from "../../assets/img/plusImg.png";
import { useNavigate } from 'react-router-dom';

const CreateFeedBack = () => {
  const [showAccordion, setShowAccordion] = useState(false);
  const navigate=useNavigate()

  const toggleAccordion = () => {
    setShowAccordion(!showAccordion);
  };

  return (
    <div className={style.createFeedBack_page}>
      <div className={style.createFeedBack_page_return}>
        <IoIosArrowBack className={style.createFeedBack_page_return_icon} onClick={()=>navigate(-1)}/>Go Back
      </div>
      <div className={style.createFeedBack}>
        <div className={style.createFeedBack_Icon_box}>
          <img src={plusImg} alt="Plus Icon" className={style.createFeedBack_Icon} />
        </div>
        <div className={style.createFeedBack_title}>Create New Feedback</div>
        <div className={`${style.createFeedBack_name_box} ${style.firstBox}`}>
          <div className={style.createFeedBack_box_title}>Feedback Title</div>
          <div className={style.createFeedBack_box_desc}>Add a short, descriptive headline</div>
          <input type="text" className={style.createFeedBack_box_input} />
        </div>
        <div className={style.createFeedBack_category_box}>
          <div className={style.createFeedBack_box_title}>Category</div>
          <div className={style.createFeedBack_box_desc}>Choose a category for your feedback</div>
          <div className={style.createFeedBack_category_box_accordion}>
              <div className={style.sj} onClick={toggleAccordion}>
                <span className={style.createFeedBack_category_box_accordion_header}>All<IoMdArrowRoundDown className={style.createFeedBack_category_box_accordion_header_icon} /></span>
              </div>
              <ul className={`${style.createFeedBack_category_box_accordion_ul} ${showAccordion ? style.show : ''}`}>
                <li className={style.createFeedBack_category_box_accordion_ul_li}>UI</li>
                <li className={style.createFeedBack_category_box_accordion_ul_li}>All</li>
                <li className={style.createFeedBack_category_box_accordion_ul_li}>Enhancement</li>
              </ul>
            </div>
        </div>
        <div className={style.createFeedBack_detail_box}>
          <div className={style.createFeedBack_box_title}>Feedback detail</div>
          <div className={style.createFeedBack_box_desc}>Include any specific comments on what should be improved, added, etc.</div>
          <textarea className={style.createFeedBack_box_textarea}></textarea>
        </div>
        <button className={style.createFeedBack_btn}>Add Feedback</button>
      </div>
    </div>
  );
};

export default CreateFeedBack;