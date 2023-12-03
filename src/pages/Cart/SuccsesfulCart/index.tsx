import { Link } from "react-router-dom";
import styles from "./SuccsesfulCart.module.scss";

const SuccsesfulCart: React.FC = () => {
  return (
    <div className={styles.content}>
      <div className={styles.info}>
        <h1 className={styles.title}>Заказ оформлен!</h1>
        <p className={styles.description}>
          Заказ отправлен на проверку и скоро перейдет в службу доставки. Ваш
          заказ приедет не пойми куда. УВЫ
        </p>
      </div>
      <div className={styles.img}>
        <img
          src="/assets/images/document.png"
          alt="Succsesful!"
          loading="lazy"
        />
      </div>
      <Link to={"/"} className={styles.button}>
        <span>Вернуться назад</span>
      </Link>
    </div>
  );
};

export default SuccsesfulCart;
