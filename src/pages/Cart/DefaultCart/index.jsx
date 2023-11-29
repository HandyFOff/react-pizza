import styles from "./DefaultCart.module.scss";
import CartCatalog from "../../../components/CartCatalog";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, selectCart } from "../../../redux/slices/cartSlice";

const DefaultCart = () => {
  const dispatch = useDispatch();
  const { totalPrice, totalPositions } = useSelector(selectCart);

  const handlerClearCart = () => {
    window.confirm(`Вы точно хотите удалить все пиццы?`);
    dispatch(clearCart());
  };

  return (
    <div className={styles.cart}>
      <div className={styles.top}>
        <div className={styles.title}>
          <img src="assets/icons/cart-icon.svg" alt="cart" />
          <h1>Корзина</h1>
        </div>
        <div className={styles.clear} onClick={handlerClearCart}>
          <img src="assets/icons/trash.svg" alt="trash" />
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
          <button className={styles.btn_buy}>
            <span>Оплатить сейчас</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DefaultCart;
