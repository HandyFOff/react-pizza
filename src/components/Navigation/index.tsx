import { Link } from "react-router-dom";
import styles from "./Navigations.module.scss";

interface IProps {
  totalPrice: number;
  totalPositions: number;
}

export const Navigation: React.FC<IProps> = ({ totalPrice, totalPositions }) => {
  return (
    <Link to={"/cart"} className={styles.button}>
      <span className={styles.total}>{totalPrice} ₽</span>
      <img src="/assets/icons/stick.svg" alt="separate" loading="lazy"/>
      <div className={styles.count}>
        <img src="/assets/icons/cart.svg" alt="Cart" loading="lazy"/>
        <span>{totalPositions}</span>
      </div>
    </Link>
  );
};
