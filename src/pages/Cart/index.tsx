import { useSelector } from "react-redux";
import DefaultCart from "./DefaultCart";
import EmptyCart from "./EmptyCart";
import { selectCart } from "../../redux/slices/cartSlice";

type CartLengthType = {
  data: {
    length: number;
  }
}

const Cart: React.FC = () => {
  const { data }: CartLengthType = useSelector(selectCart);

  return <>{data.length ? <DefaultCart /> : <EmptyCart />}</>;
};

export default Cart;
