import { useState } from "react";
import styles from "./CartItem.module.scss";

const CartItem = () => {
  const [pizzaCount, setPizzaCount] = useState(0);

  const increasePizzaCount = () => {
    setPizzaCount((prev) => prev += 1);
  }

  const decreasePizzaCount = () => {
    if (pizzaCount === 0) return false
    setPizzaCount((prev) => prev -= 1)
  }

  return (
    <div className={styles.item}>
      <div className={styles.info}>
        <img src="https://i.imgur.com/50XOWwc.png" alt="pizza" />
        <div className={styles.infoBlock}>
          <h1 className={styles.title}>Сырный цыпленок</h1>
          <p className={styles.description}>тонкое тесто, 26 см.</p>
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
        <h1 className={styles.price}>770 ₽</h1>
        <button className={styles.remove}>
          <img src="assets/icons/cross.svg" alt="remove" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
