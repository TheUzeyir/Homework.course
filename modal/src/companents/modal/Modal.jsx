import React from 'react'
import ModalBtn from './modalBtn/modalBtn'
import "./modal.css"
 
const modal = () => {

    const saveData=()=>{
        console.log("save");
    }

    const displayNoneModal=()=>{
        let modal=document.querySelector(".modal")
        let Icon=document.querySelector(".modal_header_btn")
        modal.style.display="none"
        Icon.style.display="none"
    }

  return (
    <div className='main_modal'>
        <div className="modal">
            <div className="modal_header">
            <h2 className='modal_mainText'>Create your account</h2>
            <div className="modal_header_btn">
                <i className="fa-solid fa-x"></i>
            </div>
            </div>
            <div className="modalCart">
                <div className="modalCart_box">
                    <div className="modalCart_box_title">First Name</div>
                    <input className='modalCart_box_input' type="text" placeholder='First name' required />
                </div>
                <div className="modalCart_box">
                    <div className="modalCart_box_title">Last Name</div>
                    <input className='modalCart_box_input' type="text" placeholder='Last name' required  />
                </div>
            </div>

            <div className="modal_Btn_box">
                <ModalBtn type="succes" btnText="Save" handleClick={saveData} />
                <ModalBtn type="simple" btnText="Cancel" handleClick={displayNoneModal}/>
            </div>
        </div>
    </div>
  )
}

export default modal
