import { useSelector } from "react-redux";
import DefaultCart from "./DefaultCart";
import EmptyCart from "./EmptyCart";

const Cart = () => {
  const data = useSelector((state) => state.cart.data);

  return <>{data.length ? <DefaultCart /> : <EmptyCart />}</>;
};

export default Cart;
