import React, { useState } from 'react';
import styles from './main.module.css';
import { CiShoppingCart } from 'react-icons/ci';
import img1 from '../../assets/img/1.jpg';
import img2 from '../../assets/img/2.jpg';
import img3 from '../../assets/img/3.jpeg';
import img4 from '../../assets/img/4.jpeg';

 
const Main = () => {
  const [count, setCount] = useState(1);
  const [mainImage, setMainImage] = useState(img1);

  const handleClickMinus = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleClickPlus = () => {
    setCount(count + 1);
  };

  const handleClickImg = (newImage) => {
    setMainImage(newImage);
  };
  

  return (
    <div className="container">
      <div className={styles.product}>
        <div className={styles.product_images}>
          <div className={styles.product_images_main}>
            <img src={mainImage} alt="shoes" className={styles.product_images_main_img} />
          </div>
          <div className={styles.product_images_box}>
            {[img1, img2, img3, img4].map((image, index) => (
              <img
                key={index}
                src={image}
                alt="shoes"
                className={styles.product_images_box_other}
                onClick={() => handleClickImg(image)}
              />
            ))}
          </div>
        </div>

          <div className={styles.product_info}>
            <h3 className={styles.product_info_title}>SNEAKER COMPANY</h3>
            <h2 className={styles.product_info_name}>Fall Limited Edition Sneakers</h2>
            <p className={styles.product_info_decs}>These low-profile sneakers are your perfect casual wear 
            companion.Featuring a durable rubber outer sole, they'll 
            withstand everything the weather can offer.</p>
            <div className={styles.product_info_sale}>
              <div className={styles.product_info_sale_box}>
                <span className={styles.product_info_sale_box_price}>${count*125.00}</span>
                <span className={styles.product_info_sale_box_percentage}>50%</span>
              </div>
              <p className={styles["product_info_sale_dis-percentage"]}><del>$250.00</del></p>
            </div>

              <div className={styles.product_buy}>
                <div className={styles.product_buy_counter}>
                    <span className={styles.product_buy_counter_minus} onClick={handleClickMinus}>-</span>
                    <span className={styles.product_buy_counter_count}>{count}</span>
                    <span className={styles.product_buy_counter_plus} onClick={handleClickPlus}>+</span>
                </div>
                  <button className={styles.product_buy_btn}>
                    <CiShoppingCart className={styles.product_buy_btn_icon}/>
                    <span className={styles.product_buy_btn_desc}>Add to cart</span>
                  </button>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Main
