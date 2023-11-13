import styles from "./EmptyCart.module.scss";

const EmptyCart = () => {
  return (
    <div className={styles.empty}>
      <div className={styles.info}>
        <h1 className={styles.title}>Корзина пустая 😕</h1>
        <p className={styles.description}>
          Вероятней всего, вы не заказывали ещё пиццу.<br></br>
          Для того, чтобы заказать пиццу, перейди на главную страницу.
        </p>
      </div>
      <div className={styles.img}>
        <img src="assets/images/empty-cart.png" alt="empty-cart.png" />
      </div>
      <button className={styles.button}>
        <span>Вернуться назад</span>
      </button>
    </div>
  );
};

export default EmptyCart;
