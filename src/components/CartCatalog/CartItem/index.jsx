import { useState } from "react";
import styles from "./CartItem.module.scss";
import { useDispatch } from "react-redux";
import { deleteFromCart } from "../../../redux/slices/cartSlice";

const CartItem = ({ id, imageUrl, title, type, size, price }) => {
  const [pizzaCount, setPizzaCount] = useState(0);

  const dispatch = useDispatch();

  const increasePizzaCount = () => {
    setPizzaCount((prev) => (prev += 1));
  };

  const decreasePizzaCount = () => {
    if (pizzaCount === 0) return false;
    setPizzaCount((prev) => (prev -= 1));
  };

  const handlerRemove = () => {
    dispatch(deleteFromCart({ id, price }));
  };

  return (
    <div className={styles.item}>
      <div className={styles.info}>
        <img src={imageUrl} alt="pizza" />
        <div className={styles.infoBlock}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.description}>
            {type}, {size} см.
          </p>
        </div>
      </div>
      <div className={styles.control}>
        <div className={styles.counter}>
          <button className={styles.minus} onClick={decreasePizzaCount}>
            <img src="assets/icons/minus-icon.svg" alt="minus" />
          </button>
          <h1 className={styles.count}>{pizzaCount}</h1>
          <button className={styles.plus} onClick={increasePizzaCount}>
            <img src="assets/icons/plus-icon.svg" alt="plus" />
          </button>
        </div>
        <h1 className={styles.price}>{price} ₽</h1>
        <button className={styles.remove} onClick={handlerRemove}>
          <img src="assets/icons/cross.svg" alt="remove" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
