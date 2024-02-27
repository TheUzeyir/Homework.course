import React, { useState } from 'react';
import style from "./createFeedBack.module.css";
import { IoMdArrowRoundDown, IoIosArrowBack } from "react-icons/io";
import plusImg from "../../assets/img/plusImg.png";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setInputValue as setInputValueAction } from "../store/dataSlice";

const CreateFeedBack = () => {
  const [showAccordion, setShowAccordion] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [inputValueLocal, setInputValueLocal] = useState('');
  const [textInputValueLocal, setTextInputValueLocal] = useState('');
  const[categoryDataLocal,setCategoryDataLocal]=useState('All')

  const toggleAccordion = () => {
    setShowAccordion(!showAccordion);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setShowAccordion(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setInputValueAction({ 
      inputData: inputValueLocal, 
      textData: textInputValueLocal, 
      categoryData: selectedCategory 
    }));
    setInputValueLocal('');
    setTextInputValueLocal('');
    setSelectedCategory('All'); // Reset selected category to 'All'
  };

  return (
    <div className={style.createFeedBack_page}>
      <div className={style.createFeedBack_page_return}>
        <IoIosArrowBack className={style.createFeedBack_page_return_icon} onClick={() => navigate(-1)} />Go Back
      </div>
      <div className={style.createFeedBack}>
        <div className={style.createFeedBack_Icon_box}>
          <img src={plusImg} alt="Plus Icon" className={style.createFeedBack_Icon} />
        </div>
        <div className={style.createFeedBack_title}>Create New Feedback</div>
        <form onSubmit={handleSubmit}>
          <div className={`${style.createFeedBack_name_box} ${style.firstBox}`}>
            <div className={style.createFeedBack_box_title}>Feedback Title</div>
            <div className={style.createFeedBack_box_desc}>Add a short, descriptive headline</div>
            <input
              type="text"
              className={style.createFeedBack_box_input}
              value={inputValueLocal}
              onChange={(e) => setInputValueLocal(e.target.value)} 
              required
            />
          </div>
          <div className={style.createFeedBack_category_box}>
            <div className={style.createFeedBack_box_title}>Category</div>
            <div className={style.createFeedBack_box_desc}>Choose a category for your feedback</div>
            <div className={style.createFeedBack_category_box_accordion}>
              <div className={style.sj} onClick={toggleAccordion}>
                <span className={style.createFeedBack_category_box_accordion_header}>{selectedCategory}<IoMdArrowRoundDown className={style.createFeedBack_category_box_accordion_header_icon} /></span>
              </div>
              <ul className={`${style.createFeedBack_category_box_accordion_ul} ${showAccordion ? style.show : ''}`}>
                <li className={style.createFeedBack_category_box_accordion_ul_li} onClick={() => handleCategorySelect('UI')}>UI</li>
                <li className={style.createFeedBack_category_box_accordion_ul_li} onClick={() => handleCategorySelect('All')}>All</li>
                <li className={style.createFeedBack_category_box_accordion_ul_li} onClick={() => handleCategorySelect('Enhancement')}>Enhancement</li>
              </ul>
            </div>
          </div>
          <div className={style.createFeedBack_detail_box}>
            <div className={style.createFeedBack_box_title}>Feedback detail</div>
            <div className={style.createFeedBack_box_desc}>Include any specific comments on what should be improved, added, etc.</div>
            <textarea
              className={style.createFeedBack_box_textarea}    
              value={textInputValueLocal}
              onChange={(e) => setTextInputValueLocal(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit" className={style.createFeedBack_btn}>Add Feedback</button>
        </form>
      </div>
    </div>
  );
};

export default CreateFeedBack;
