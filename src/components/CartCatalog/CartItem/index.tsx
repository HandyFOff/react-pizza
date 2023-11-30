import styles from "./CartItem.module.scss";
import { useDispatch } from "react-redux";
import { decreaseCount, deleteFromCart, postToCart } from "../../../redux/slices/cartSlice";

interface IProps {
  id: number;
  imageUrl: string;
  title: string;
  type: number;
  size: number;
  price: number;
  count: number;
}

const CartItem: React.FC<IProps> = ({ id, imageUrl, title, type, size, price, count }) => {
  const dispatch = useDispatch();

  const plusCount = () => {
    dispatch(postToCart({ id, price }));
  };

  const minusCount = (count: number): void => {
    if (count !== 1) {
      dispatch(decreaseCount({ id, price }));
    }
  };

  const handlerRemove = () => {
    window.confirm(`Вы точно хотите удалить ${count} ${title}?`);
    dispatch(deleteFromCart({ id }));
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
            className={styles.minus}
            onClick={() => minusCount(count)}
          >
            <img src="assets/icons/minus-icon.svg" alt="minus" />
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
