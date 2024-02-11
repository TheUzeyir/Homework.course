import React, {useState } from 'react'
import styles from "./bag.module.css"
import img from "../../assets/image/img2.jpg"


const Bag = (props) => {

  const[count,setCount]=useState(1)


  const handleClickMinus = () => {
    if (count>1) {
      setCount(count-1)
    }
  }

   const handleClickPlus = () => {
       setCount(count+1)
  }


  return props.isOpen ? (
    <div className={styles.bag}>
        <div className={styles.bag_product}>
        <div className={styles.bag_product_img_box}>
          <img src={img} alt="" className={styles.bag_product_img}/>
        </div>
        <div className={styles.bag_product_information}>
          <div className={styles.bag_product_information_name}><h4>{props.name}</h4></div>
          <div className={styles.bag_product_information_sale}>
            <div className={styles.bag_product_information_sale_price}><h4>{`${count*235.00}`}</h4></div>
            <div className={styles.bag_product_information_sale_counter}>
              <span className={styles.minus} onClick={handleClickMinus}>-</span>
              <span className={styles.count}>{count}</span>
              <span className={styles.plus} onClick={handleClickPlus}>+</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default Bag
