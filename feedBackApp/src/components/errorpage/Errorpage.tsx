import React from 'react'
import style from "./errorpage.module.css"
import errorImg from "../../assets//img/errorImg.png"

const Errorpage = () => {
  return (
    <div className={style.errorpage}>
      <div className={style.errorpage_img}><img src={errorImg} alt="" /></div>
      <div className={style.errorpage_title}>There is no feedback yet.</div>
      <div className={style.errorpage_desc}>Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app.</div>
      <div className={style.errorpage_btn}>+Add Feedback</div>
    </div>
  )
}

export default Errorpage
