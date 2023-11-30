import { useSelector } from "react-redux";
import styles from "./CartCatalog.module.scss";
import CartItem from "./CartItem";
import { selectCart } from "../../redux/slices/cartSlice";

interface ICartItem {
  id: number;
  imageUrl: string;
  title: string;
  type: number;
  size: number;
  price: number;
  count: number;
}

interface ICartList {
  data: ICartItem[];
}

const CartCatalog: React.FC = () => {
  const { data }: ICartList = useSelector(selectCart);

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

export default CartCatalog;
