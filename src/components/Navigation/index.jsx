import { Link } from "react-router-dom";
import styles from "./Navigations.module.scss";
import { useSelector } from "react-redux";

const Navigation = () => {
  const data = useSelector((state) => state.cart);

  return (
    <Link to={'/cart'} className={styles.button}>
      <span className={styles.total}>{data.totalPrice} ₽</span>
      <img src="assets/icons/stick.svg" alt="separate" />
      <div className={styles.count}>
        <img src="assets/icons/cart.svg" alt="Cart" />
        <span>{data.totalPositions}</span>
      </div>
    </Link>
  );
};

export default Navigation;
