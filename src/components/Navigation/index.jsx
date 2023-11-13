import { Link } from "react-router-dom";
import styles from "./Navigations.module.scss";

const Navigation = () => {
  return (
    <Link to={'/cart'} className={styles.button}>
      <span className={styles.total}>520 ₽</span>
      <img src="assets/icons/stick.svg" alt="separate" />
      <div className={styles.count}>
        <img src="assets/icons/cart.svg" alt="Cart" />
        <span>3</span>
      </div>
    </Link>
  );
};

export default Navigation;
