import { useSelector } from "react-redux";
import DefaultCart from "./DefaultCart";
import EmptyCart from "./EmptyCart";
import { selectCart } from "../../redux/slices/cart/selectors";

const Cart: React.FC = () => {
  const { data } = useSelector(selectCart);

  return <>{data.length ? <DefaultCart /> : <EmptyCart />}</>;
};

export default Cart;
