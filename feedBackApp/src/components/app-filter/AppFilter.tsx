import React from 'react'
import style from "./appFilter.module.css"
import AllFilterBtn from '../filterBtn/all/AllFilterBtn'
import Enhancement from '../filterBtn/enhancement/Enhancement'
import UI from '../filterBtn/ui/UI'



const AppFilter = () => {
  return (
    <div>
        <div className={style.appMain_logo}>
          <h3 className={style.appMain_logo_mainText}>Frontend Mentor</h3>
          <p className={style.appMain_logo_title}>Feedback Board</p>
        </div>
        <div className={style.appMain_filterBox}>
          <AllFilterBtn/>
          <Enhancement/>
          <UI/>
        </div>
    </div>
  )
}

export default AppFilter
