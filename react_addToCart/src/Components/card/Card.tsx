import style from "./card.module.css";
import { useDispatch } from "react-redux";
import { addItem } from "../../store/cardSlice";

const Card = (item ) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItem(item));
  };

  return (
    <div className={style.card_products}>
      <h2 className={style.card_products_title}>{item.title}</h2>
      <p className={style.card_products_price}>Price - {item.price}</p>
      <button className={style.card_products_btn} onClick={handleAddToCart}>
        Add To Cart
      </button>
    </div>
  );
};

export default Card;
