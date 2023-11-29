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
      const foundInCart = state.data.find((item) => item.id === action.payload.id);

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
    deleteFromCart: (state, action) => {
      const foundItem = state.data.find((item) => item.id === action.payload.id);

      state.totalPrice -= (foundItem.price * foundItem.count);
      state.totalPositions -= foundItem.count;
      
      state.data = state.data.filter((item) => item.id !== action.payload.id);
    },
    decreaseCount: (state, action) => {
      const foundInCart = state.data.find((item) => item.id === action.payload.id);

      if (foundInCart.count > 1) {
        foundInCart.count--;
        state.totalPositions--;
        state.totalPrice -= +action.payload.price;
      } 
    },
    clearCart: (state) => {
      state.data = [];
      state.totalPrice = 0;
      state.totalPositions = 0;
    }
  },
});

export const selectCart = (state) => state.cart;
export const selectCartById = (id) => (state) => state.cart.data.find((item) => item.id === id);

export const { postToCart, deleteFromCart, clearCart, decreaseCount} = cartSlice.actions;
export default cartSlice.reducer;
