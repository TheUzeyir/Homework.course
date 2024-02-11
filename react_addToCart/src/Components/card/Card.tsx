import React from 'react'
import styles from "./card.module.css"

interface productType{
  name:string,
  desc:string,
  price:number,
}

const Card: React.FC<productType> = (props) => {
  function handleClickBtn() {
    
    console.log(props.id);
  }

  return (
    <div className={styles.card}>
      <div className={styles.card_img_bpx}>
        <img src={props.img} alt="phone" className={styles.card_img}/>
      </div>
      <div className={styles.card_product_name}><h2>{props.name}</h2></div>
      <div className={styles.card_product_desc}>{props.desc}</div>
      <p>${props.price}</p>
      <button onClick={handleClickBtn}>Add TO Card</button>
    </div>
  );
};



export default Card
