import React from 'react'
import ModalBtn from './modalBtn/modalBtn'
import "./modal.css"
import { useState } from 'react'
 
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


    const [fistNAme, setFirstName] = useState('');
    const [lastNAme, setLastName] = useState('');

    const giveName = event => {
      setFirstName(event.target.value);
      console.log(event.target.value);
    };

    const giveSurName = event => {
      setLastName(event.target.value);
      console.log(event.target.value);
    };


  return (
    <div className="table">

      <h3>First Name:{fistNAme}</h3>
      <h4>Last Name:{lastNAme}</h4>

    <p className='table_FirstName'></p>
    <p className='table_LAstName'></p>

    <div className='main_modal'>
        <div className="modal">
            <div className="modal_header">
            <h2 className='modal_mainText'>Create your account</h2>
            <div className="modal_header_btn" onClick={displayNoneModal}>
                <i className="fa-solid fa-x"></i>
            </div>
            </div>
            <div className="modalCart">
                <div className="modalCart_box">
                    <div className="modalCart_box_title">First Name</div>
                    <input className='modalCart_box_input' type="text" placeholder='First name' required onChange={giveName} value={fistNAme} />
                </div>
                <div className="modalCart_box">
                    <div className="modalCart_box_title">Last Name</div>
                    <input className='modalCart_box_input' type="text" placeholder='Last name' required  onChange={giveSurName} value={lastNAme}/>
                </div>
            </div>

            <div className="modal_Btn_box">
                <ModalBtn type="succes" btnText="Save" handleClick={saveData} />
                <ModalBtn type="simple" btnText="Cancel" handleClick={displayNoneModal}/>
            </div>
        </div>
    </div>
    </div>
  )
}

export default modal
