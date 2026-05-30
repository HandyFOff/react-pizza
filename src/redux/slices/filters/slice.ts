import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFilterSliceState, TCategories } from "./types";

const initialState: IFilterSliceState = {
  searchValue: "",
  categories: {
    currentCategory: 0,
    currentCategoryProperty: "",
    list: ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"],
  },
  sort: {
    currentSort: "популярности",
    currentSortProperty: "orderby=rating",
    list: [
      { id: 0, sortName: "популярности", sort: "orderby=rating" },
      { id: 1, sortName: "цене", sort: "orderby=price" },
      { id: 2, sortName: "алфавиту", sort: "orderby=title" },
    ],
  },
  currentPage: 0,
};

const filtersSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<TCategories>) => {
      state.categories.currentCategoryProperty =
        action.payload.currentCategoryProperty;
      state.categories.currentCategory = action.payload.currentCategory;
    },
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
    setSort: (state, action: PayloadAction<{sortName: string, id: number}>) => {
      state.sort.currentSortProperty =
      state.sort.list[action.payload.id].sort;
      state.sort.currentSort = action.payload.sortName;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
  },
});

export const { setCategory, setSort, setPage, setSearchValue } =
  filtersSlice.actions;
export default filtersSlice.reducer;
