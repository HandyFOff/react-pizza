import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";

const API = "https://react-pizza-api.up.railway.app/api";

type TPizza = {
  id: string;
  imageUrl: string;
  title: string;
  types: number[];
  sizes: number[];
  price: number;
  category: number;
  rating: number;
};

interface IPizzaSliceState {
  items: TPizza[];
  error: boolean;
  loading: boolean;
}

const initialState: IPizzaSliceState = {
  items: [],
  error: false,
  loading: true,
};

export const fetchPizza = createAsyncThunk<TPizza[], Record<string, string>>(
  "pizza/fetchPizza",
  async (params) => {
    const { pageProperty, sortProperty, filterProperty, searchValue } = params;

    const { data } = await axios.get(
      `${API}/data?_page=${pageProperty + 1}&_limit=4&q=${searchValue}&_sort=${sortProperty}${filterProperty}`
    );

    return data;
  }
);

export const fetchPizzaById = createAsyncThunk<TPizza, string>(
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

    builder.addCase(fetchPizzaById.fulfilled, (state) => {
      state.loading = false;
      state.error = false;
    });
    builder.addCase(fetchPizzaById.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchPizzaById.rejected, (state) => {
      state.error = true;
    });
  },
});

export const selectPizza = (state: RootState) => state.pizza;
export default pizzaSlice.reducer;
