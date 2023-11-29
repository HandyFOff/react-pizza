import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API = "https://react-pizza-api.up.railway.app/api";

const initialState = {
  items: [],
  currentItem: {},
  error: false,
  loading: true,
};

export const fetchPizza = createAsyncThunk(
  "pizza/fetchPizza",
  async (params) => {
    const { pageProperty, sortProperty, filterProperty, searchValue } = params;

    const { data } = await axios.get(
      `${API}/data?q=${searchValue}&_page=${pageProperty}&_limit=4&_sort=${sortProperty}${filterProperty}`
    );

    return data;
  }
);

export const fetchPizzaById = createAsyncThunk(
  "pizza/fetchPizzaById",
  async (id) => {
    const { data } = await axios.get(`${API}/data/${id}`);

    return data;
  }
);

const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPizza.fulfilled, (state, action) => {
      state.loading = false;
      state.error = false;
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

    builder.addCase(fetchPizzaById.fulfilled, (state, action) => {
      state.loading = false;
      state.error = false;
      state.currentItem = action.payload;
    });
    builder.addCase(fetchPizzaById.pending, (state) => {
      state.loading = true;
      state.currentItem = {};
    });
    builder.addCase(fetchPizzaById.rejected, (state) => {
      state.error = true;
      state.currentItem = {};
    });
  },
});

export const selectPizza = (state) => state.pizza;
export default pizzaSlice.reducer;
export const { setPizza } = pizzaSlice.actions;
