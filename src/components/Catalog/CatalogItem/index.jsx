import { useState } from "react";
import styles from "./CatalogItem.module.scss";

const CatalogItem = ({
  id,
  title,
  imageUrl,
  sizes,
  price,
  category,
  rating,
  types,
}) => {
  const [pizzaCount, setPizzaCount] = useState(0);
  const [pizzaTypes] = useState(["тонкое", "традиционное"]);
  const [activeSize, setActiveSize] = useState(0);
  const [activetype, setActivetype] = useState(0);

  const increasePizzaCount = () => {
    if (pizzaCount === 9) return null;
    setPizzaCount((prev) => (prev += 1));
  };

  return (
    <div className={styles.item}>
      <div className={styles.img}>
        <img src={imageUrl} alt="Pizza img" />
      </div>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.settings}>
        <div className={styles.slices}>
          {types.map((item, index) => (
            <div
              key={index}
              className={
                styles.slice +
                " " +
                (types.length === 1 ? styles.alone : "") +
                " " +
                (activetype === index ? styles.active : "")
              }
              onClick={() => setActivetype(index)}
            >
              <span>{pizzaTypes[item]}</span>
            </div>
          ))}
        </div>
        <div className={styles.sizes}>
          {sizes.map((item, index) => (
            <div
              key={index}
              className={
                styles.size + " " + (activeSize === index ? styles.active : "")
              }
              onClick={() => setActiveSize(index)}
            >
              <span>{item} см.</span>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.info}>
        <h1 className={styles.price}>от {price} ₽</h1>
        <button className={styles["btn-buy"]} onClick={increasePizzaCount}>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="#EB5A1E"
            />
          </svg>

          <h1>Добавить</h1>
          <div className={styles.circle}>
            <span>{pizzaCount}</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default CatalogItem;
