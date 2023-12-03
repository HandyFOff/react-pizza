import { useSelector } from "react-redux";
import styles from "./CartCatalog.module.scss";
import { selectCart } from "../../redux/slices/cart/selectors";
import { CartItem } from "..";

export const CartCatalog: React.FC = () => {
  const { data } = useSelector(selectCart);

  return (
    <div className={styles.catalog}>
      {data.map((item, index) => (
        <CartItem
          key={index}
          id={item.id}
          imageUrl={item.imageUrl}
          title={item.title}
          type={item.type}
          size={item.size}
          price={item.price}
          count={item.count}
        />
      ))}
    </div>
  );
};
