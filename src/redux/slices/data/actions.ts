import { createAsyncThunk } from "@reduxjs/toolkit";
import { TPizza } from "./types";
import axios from "axios";

const API = "https://react-pizza-api.up.railway.app/api";

export const fetchPizza = createAsyncThunk<TPizza[], Record<string, string>>(
  "pizza/fetchPizza",
  async (params, { rejectWithValue }) => {
    try {
      const { pageProperty, sortProperty, filterProperty, searchValue } =
        params;

      const { data } = await axios.get(
        `${API}/data?_page=${
          +pageProperty + 1
        }&_limit=4&q=${searchValue}&_sort=${sortProperty}${filterProperty}`
      );

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const fetchPizzaById = createAsyncThunk<TPizza, string>(
  "pizza/fetchPizzaById",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${API}/data/${id}`);

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
