import { useSelector } from "react-redux";
import DefaultCart from "./DefaultCart";
import EmptyCart from "./EmptyCart";
import { selectCart } from "../../redux/slices/cart/selectors";
import { useState } from "react";
import SuccsesfulCart from "./SuccsesfulCart";

const Cart: React.FC = () => {
  const { data } = useSelector(selectCart);
  const [ordered, setOrdered] = useState(false);

  return <>{ordered ? <SuccsesfulCart/> : (data.length ? <DefaultCart setOrdered={setOrdered} /> : <EmptyCart />)}</>;
};

export default Cart;
