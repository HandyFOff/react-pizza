import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalPrice: 0,
  totalPositions: 0,
  data: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    postToCart: (state, action) => {
      state.data.push(action.payload);
      state.totalPositions = state.data.length;
      state.totalPrice += +action.payload.price;
    },
    deleteFromCart: (state, action) => {
      state.data = state.data.filter((item) => +item.id !== +action.payload.id);
      state.totalPositions = state.data.length;
      state.totalPrice -= +action.payload.price;
    },
    clearCart: (state) => {
      state.data = [];
      state.totalPrice = 0;
      state.totalPositions = 0;
    }
  },
});

export const { postToCart, deleteFromCart, clearCart} = cartSlice.actions;
export default cartSlice.reducer;
