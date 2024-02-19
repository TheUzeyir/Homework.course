import style from "./modal.module.css";
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../../store/store';
import { removeItem } from '../../store/cardSlice';

const Modal = () => {
  const addedProducts = useSelector((state: RootState) => state.cardSlice.items);
  const dispatch = useDispatch();
    
  return (
    <div>
      {addedProducts.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <button onClick={() => dispatch(removeItem(item.id))}>Remove Item</button>
        </div>
      ))}
    </div>
  );
};

export default Modal;
