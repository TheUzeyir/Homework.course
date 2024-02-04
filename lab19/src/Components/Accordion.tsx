import React, { useState } from 'react'
import styles from "./accordion.module.css"
import { FaArrowDown } from "react-icons/fa";

interface AccardionType{
    id:number
    title: string,
    desc:string
}

const Accordion:React.FC<AccardionType> = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen((prev) => !prev);
    }

    return (
        <div className={styles.accordion_box + isOpen ? styles.accordion_box_title : ''}>
          <div className={styles.accordion_box_header}>
            <h2>{props.title}</h2>
            <FaArrowDown className={`${styles.accordion_icon} ${isOpen ? styles.style : ''}`} onClick={toggleOpen}/>    
          </div>
          <p className={isOpen ? styles.visible : ''}>{props.desc}</p>
        </div>
    )
}  


export default Accordion
