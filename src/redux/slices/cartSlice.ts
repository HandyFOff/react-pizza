import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export type TCartItem = {
  id: string;
  imageUrl: string;
  title: string;
  type: string;
  size: number;
  price: number;
  count: number;
};

interface ICartSliceState {
  totalPrice: number;
  totalPositions: number;
  data: TCartItem[];
}

const initialState: ICartSliceState = {
  totalPrice: 0,
  totalPositions: 0,
  data: [],
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
      const foundItem = state.data.find(
        (item) => item.id === action.payload
      );

      if (foundItem) {
        state.totalPrice -= foundItem.price * foundItem.count;
        state.totalPositions -= foundItem.count;
      }

      state.data = state.data.filter((item) => item.id !== action.payload);
    },
    decreaseCount: (state, action: PayloadAction<string>) => {
      const foundInCart = state.data.find(
        (item) => item.id === action.payload
      );

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

export const selectCart = (state: RootState) => state.cart;
export const selectCartById = (id: string) => (state: RootState) =>
  state.cart.data.find((item) => item.id === id);

export const { postToCart, deleteFromCart, clearCart, decreaseCount } =
  cartSlice.actions;
export default cartSlice.reducer;
