import { createSlice } from "@reduxjs/toolkit";
import { IPizzaSliceState } from "./types";
import { fetchPizza, fetchPizzaById } from "./actions";

const initialState: IPizzaSliceState = {
  items: [],
  error: false,
  loading: true,
};

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

export default pizzaSlice.reducer;
