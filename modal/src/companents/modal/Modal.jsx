import React, { useState } from 'react';
import ModalBtn from "./modalBtn/ModalBtn.jsx"
import "./modal.css"

const Modal = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [displayedFirstName, setDisplayedFirstName] = useState('');
  const [displayedLastName, setDisplayedLastName] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);



  const isModalVisibleC = isModalVisible ? "Hide Modal" : "Show Modal"

  const displayNoneModal = () => {
    setIsModalVisible(false);
  };

  const giveName = event => {
    setFirstName(event.target.value);
  };

  const giveSurName = event => {
    setLastName(event.target.value);
  };

  const saveBtn = () => {
    setDisplayedFirstName(firstName);
    setDisplayedLastName(lastName);
    displayNoneModal();
    setFirstName("")
    setLastName(" ")
  };

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <>
      <ModalBtn type="create" btnText={isModalVisibleC} handleClick={toggleModal} />
        <h3>First Name: {displayedFirstName}</h3>
        <h4>Last Name: {displayedLastName}</h4>
      {isModalVisible && (
        <div className="table">

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
                  <input className='modalCart_box_input' type="text" placeholder='First name' required onChange={giveName} value={firstName} />
                </div>
                <div className="modalCart_box">
                  <div className="modalCart_box_title">Last Name</div>
                  <input className='modalCart_box_input' type="text" placeholder='Last name' required onChange={giveSurName} value={lastName} />
                </div>
              </div>

              <div className="modal_Btn_box">
                <ModalBtn type="success" btnText="Save" handleClick={saveBtn} />
                <ModalBtn type="simple" btnText="Cancel" handleClick={displayNoneModal} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;