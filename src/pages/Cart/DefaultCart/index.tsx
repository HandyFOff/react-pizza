import styles from "./DefaultCart.module.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../redux/store";
import { selectCart } from "../../../redux/slices/cart/selectors";
import { clearCart } from "../../../redux/slices/cart/slice";
import { CartCatalog } from "../../../components";

type Props = {
  setOrdered: (state: boolean) => void;
}

const DefaultCart: React.FC<Props> = ({setOrdered}) => {
  const dispatch = useAppDispatch();
  const { totalPrice, totalPositions } = useSelector(selectCart);

  const handlerClearCart = (): void => {
    if (window.confirm(`Вы точно хотите удалить все пиццы?`)) {
      dispatch(clearCart());
    }
  };

  const submitOrder = (): void => {
    if (window.confirm('Вы точно хотите оформить заказ?')) {
      setOrdered(true);
      dispatch(clearCart());
    }
  }

  return (
    <div className={styles.cart}>
      <div className={styles.top}>
        <div className={styles.title}>
          <img src="assets/icons/cart-icon.svg" alt="cart" loading="lazy"/>
          <h1>Корзина</h1>
        </div>
        <div className={styles.clear} onClick={handlerClearCart}>
          <img src="assets/icons/trash.svg" alt="trash" loading="lazy"/>
          <h1>Очистить корзину</h1>
        </div>
      </div>
      <div className={styles.content}>
        <CartCatalog />
      </div>
      <div className={styles.info}>
        <div className={styles.total}>
          <h1 className={styles.count}>
            Всего пицц: <b>{totalPositions} шт.</b>
          </h1>
          <div className={styles.price}>
            Сумма заказа: <b>{totalPrice} ₽</b>
          </div>
        </div>
        <div className={styles.buttons}>
          <Link to={"/"} className={styles.btn_back}>
            <svg
              width="8"
              height="14"
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 13L1 6.93015L6.86175 1"
                stroke="#D3D3D3"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <span>Вернуться назад</span>
          </Link>
          <button type="button" className={styles.btn_buy} onClick={submitOrder}>
            <span>Оплатить сейчас</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DefaultCart;
