import React from 'react'
import style from "./createFeedBack.module.css"
import plusImg from "../../assets/img/plusImg.png"

const CreateFeedBack = () => {
  return (
    <div className={style.createFeedBack}>
      <div className={style.createFeedBack_Icon_box}>
        <img src={plusImg} className={style.createFeedBack_Icon}/>
      </div>
      <div className={style.createFeedBack_title}>Create New Feedback</div>
      <div className={`${style.createFeedBack_name_box} ${style.firstBox}`}>
        <div className={style.createFeedBack_box_title}>Feedback Title</div>
        <div className={style.createFeedBack_box_desc}>Add a short,descriptive headline</div>
        <input type="text" className={style.createFeedBack_box_input}/>
      </div>
      <div className={style.createFeedBack_category_box}>
        <div className={style.createFeedBack_box_title}>Category</div>
        <div className={style.createFeedBack_box_desc}>Choose a category for your feedback</div>
        <input type="text" className={style.createFeedBack_box_input}/>
      </div>
      <div className={style.createFeedBack_detail_box}>
        <div className={style.createFeedBack_box_title}>Feedback detail</div>
        <div className={style.createFeedBack_box_desc}>Include any spesific comments on what should be improwed,added,etc.</div>
        <textarea className={style.createFeedBack_box_textarea}></textarea>
      </div>
      <button className={style.createFeedBack_btn}>Add Feedback</button>
    </div>
  )
}

export default CreateFeedBack
