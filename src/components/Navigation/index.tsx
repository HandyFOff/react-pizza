import { Link } from "react-router-dom";
import styles from "./Navigations.module.scss";
import { useSelector } from "react-redux";
import { selectCart } from "../../redux/slices/cartSlice";

const Navigation: React.FC = () => {
  const {totalPrice, totalPositions} = useSelector(selectCart);

  return (
    <Link to={'/cart'} className={styles.button}>
      <span className={styles.total}>{totalPrice} ₽</span>
      <img src="assets/icons/stick.svg" alt="separate" />
      <div className={styles.count}>
        <img src="assets/icons/cart.svg" alt="Cart" />
        <span>{totalPositions}</span>
      </div>
    </Link>
  );
};

export default Navigation;
