import styles from "./CartItem.module.scss";
import clsx from "clsx";
import {
  TCartItem,
  decreaseCount,
  deleteFromCart,
  postToCart,
} from "../../../redux/slices/cartSlice";
import { useAppDispatch } from "../../../redux/store";

const CartItem: React.FC<TCartItem> = ({
  id,
  imageUrl,
  title,
  type,
  size,
  price,
  count,
}) => {
  const dispatch = useAppDispatch();

  const plusCount = () => {
    const item = { id, imageUrl, title, type, size, price, count };
    dispatch(postToCart(item));
  };

  const minusCount = (id: string): void => {
    dispatch(decreaseCount(id));
  };

  const handlerRemove = () => {
    if (window.confirm(`Вы точно хотите удалить ${count} ${title}?`)) {
      dispatch(deleteFromCart(id));
    }
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
          <button
            type="button"
            className={`${styles.minus} ${count === 1 ? styles.disabled : ""}`}
            onClick={() => minusCount(id)}
            disabled={count === 1}
          >
            {count === 1 ? (
              <img src="assets/icons/minus-inactive.svg" alt="minus" />
            ) : (
              <img src="assets/icons/minus-icon.svg" alt="minus" />
            )}
          </button>
          <h1 className={styles.count}>{count}</h1>
          <button type="button" className={styles.plus} onClick={plusCount}>
            <img src="assets/icons/plus-icon.svg" alt="plus" />
          </button>
        </div>
        <h1 className={styles.price}>{price * count} ₽</h1>
        <button type="button" className={styles.remove} onClick={handlerRemove}>
          <img src="assets/icons/cross.svg" alt="remove" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
