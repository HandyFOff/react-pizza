import { useSelector } from "react-redux";
import DefaultCart from "./DefaultCart";
import EmptyCart from "./EmptyCart";
import { selectCart } from "../../redux/slices/cartSlice";

const Cart: React.FC = () => {
  const { data } = useSelector(selectCart);

  return <>{data.length ? <DefaultCart /> : <EmptyCart />}</>;
};

export default Cart;
