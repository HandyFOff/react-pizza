import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getCartFromLS } from "../../../utils";
import { ICartSliceState, TCartItem } from "./types";

const { data, totalPrice, totalPositions } = getCartFromLS();

const initialState: ICartSliceState = {
  totalPrice,
  totalPositions,
  data,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    postToCart: (state, action: PayloadAction<TCartItem>) => {
      const foundInCart = state.data.find(
        (item) => item.id === action.payload.id
      );

      if (foundInCart) {
        foundInCart.count++;
      } else {
        state.data.push({
          ...action.payload,
          count: 1,
        });
      }

      state.totalPositions++;
      state.totalPrice += +action.payload.price;
    },
    deleteFromCart: (state, action: PayloadAction<string>) => {
      const foundItem = state.data.find((item) => item.id === action.payload);

      if (foundItem) {
        state.totalPrice -= foundItem.price * foundItem.count;
        state.totalPositions -= foundItem.count;
      }

      state.data = state.data.filter((item) => item.id !== action.payload);
    },
    decreaseCount: (state, action: PayloadAction<string>) => {
      const foundInCart = state.data.find((item) => item.id === action.payload);

      if (foundInCart) {
        if (foundInCart.count > 1) {
          foundInCart.count--;
          state.totalPositions--;
          state.totalPrice -= foundInCart.price;
        }
      }
    },
    clearCart: (state) => {
      state.data = [];
      state.totalPrice = 0;
      state.totalPositions = 0;
    },
  },
});

export const { postToCart, deleteFromCart, clearCart, decreaseCount } =
  cartSlice.actions;
export default cartSlice.reducer;
