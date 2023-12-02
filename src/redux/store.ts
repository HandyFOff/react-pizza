import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import filtersSlice from './slices/filters/slice';
import cartSlice from './slices/cart/slice';
import pizzaSlice from './slices/data/slice';

export const store = configureStore({
  reducer: {
    filters: filtersSlice,
    cart: cartSlice,
    pizza: pizzaSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
