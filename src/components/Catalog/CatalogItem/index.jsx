import { useState } from "react";
import styles from "./CatalogItem.module.scss";
import { useDispatch } from "react-redux";
import { postToCart } from "../../../redux/slices/cartSlice";

const pizzaTypes = ["тонкое", "традиционное"];
const pizzaSizes = [26, 30, 40];

const CatalogItem = ({
  id,
  category,
  rating,
  title,
  imageUrl,
  sizes,
  price,
  types,
}) => {
  const [pizzaCount, setPizzaCount] = useState(0);
  const [activeSize, setActiveSize] = useState(0);
  const [activeType, setActiveType] = useState(0);

  const dispatch = useDispatch();

  const handlerAddToCart = () => {
    const item = {
      id,
      title,
      imageUrl,
      size: pizzaSizes[activeSize],
      price,
      type: pizzaTypes[activeType],
    };
    console.log(id);
    dispatch(postToCart(item));

    increasePizzaCount();
  };

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
                (activeType === index ? styles.active : "")
              }
              onClick={() => setActiveType(index)}
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
        <button className={styles["btn-buy"]} onClick={handlerAddToCart}>
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
