import { createAsyncThunk } from "@reduxjs/toolkit";
import { TPizza } from "./types";
import axios from "axios";

const API = import.meta.env.VITE_API_URL;

export const fetchPizza = createAsyncThunk<TPizza[], Record<string, string>>(
  "pizza/fetchPizza",
  async (params, { rejectWithValue }) => {
    try {
      const { pageProperty, sortProperty, filterProperty, searchValue } =
        params;

      const { data } = await axios.get(
        `${API}/pizza?page=${
          +pageProperty + 1
        }&limit=4&search=${searchValue}&${sortProperty}${filterProperty}`
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
      const { data } = await axios.get(`${API}/pizza/${id}`);

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
