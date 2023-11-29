import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API = "https://react-pizza-api.up.railway.app/api";

const initialState = {
  items: [],
  error: false,
  loading: true,
};

export const fetchPizza = createAsyncThunk(
  "pizza/fetchPizza",
  async (params) => {
    const { pageProperty, sortProperty, filterProperty, searchValue } = params;

    const response = await axios.get(
      `${API}/data?q=${searchValue}&_page=${pageProperty}&_limit=4&_sort=${sortProperty}${filterProperty}`
    );

    return response.data;
  }
);

const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPizza.fulfilled, (state, action) => {
      state.loading = false;
      state.items = action.payload;
    });
    builder.addCase(fetchPizza.pending, (state) => {
      state.loading = true;
      state.items = [];
    });
    builder.addCase(fetchPizza.rejected, (state) => {
      state.error = true;
      state.items = [];
    });
  },
});

export const selectPizza = (state) => state.pizza;
export default pizzaSlice.reducer;
export const { setPizza } = pizzaSlice.actions;
