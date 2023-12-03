import styles from "./CartItem.module.scss";
import {
  decreaseCount,
  deleteFromCart,
  postToCart,
} from "../../../redux/slices/cart/slice";
import { useAppDispatch } from "../../../redux/store";
import { TCartItem } from "../../../redux/slices/cart/types";

export const CartItem: React.FC<TCartItem> = ({
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
        <img src={imageUrl} alt="pizza" loading="lazy"/>
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
              <img src="assets/icons/minus-inactive.svg" alt="minus" loading="lazy"/>
            ) : (
              <img src="assets/icons/minus-icon.svg" alt="minus" loading="lazy"/>
            )}
          </button>
          <h1 className={styles.count}>{count}</h1>
          <button type="button" className={styles.plus} onClick={plusCount}>
            <img src="assets/icons/plus-icon.svg" alt="plus" loading="lazy"/>
          </button>
        </div>
        <h1 className={styles.price}>{price * count} ₽</h1>
        <button type="button" className={styles.remove} onClick={handlerRemove}>
          <img src="assets/icons/cross.svg" alt="remove" loading="lazy"/>
        </button>
      </div>
    </div>
  );
};
