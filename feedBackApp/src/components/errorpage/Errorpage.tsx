import React from 'react'
import style from "./errorpage.module.css"
import errorImg from "../../assets//img/errorImg.png"
import { useNavigate } from 'react-router-dom';

const Errorpage = () => {
  const navigate = useNavigate();

  return (
    <div className={style.errorpage}>
      <div className={style.errorpage_img}><img src={errorImg} alt="" /></div>
      <div className={style.errorpage_title}>There is no feedback yet.</div>
      <div className={style.errorpage_desc}>Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app.</div>
      <button className={style.errorpage_btn} onClick={() => navigate('createFeedBack')}>+Add Feedback</button>
    </div>
  )
}

export default Errorpage
