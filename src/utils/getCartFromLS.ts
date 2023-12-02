import { calcTotalPrice, calcTotalPositions } from "./index";

export const getCartFromLS = () => {
  const storage = localStorage.getItem("user_cart");
  const data = storage ? JSON.parse(storage) : [];
  const totalPrice = calcTotalPrice(data);
  const totalPositions = calcTotalPositions(data);

  return {
    data,
    totalPrice,
    totalPositions,
  };
};
