import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export type TCategories = {
  currentCategory: number;
  currentCategoryProperty: string;
  list?: string[];
};

type TSortList = {
  id: number;
  sortName: string;
  sort: string;
};

type TSort = {
  currentSort: string;
  currentSortProperty: string;
  list: TSortList[];
};

interface IFilterSliceState {
  searchValue: string;
  categories: TCategories;
  sort: TSort;
  currentPage: number;
}

const initialState: IFilterSliceState = {
  searchValue: "",
  categories: {
    currentCategory: 0,
    currentCategoryProperty: "",
    list: ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"],
  },
  sort: {
    currentSort: "популярности",
    currentSortProperty: "rating&_order=desc",
    list: [
      { id: 0, sortName: "популярности", sort: "rating&_order=desc" },
      { id: 1, sortName: "цене", sort: "price&_order=asc" },
      { id: 2, sortName: "алфавиту", sort: "title&_order=asc" },
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

export const selectFilters = (state: RootState) => state.filters;

export const selectCategories = createSelector(selectFilters, (state) => state.categories); // memorize categories
export const selectSort = createSelector(selectFilters, (state) => state.sort); // memorize sort

export const { setCategory, setSort, setPage, setSearchValue } =
  filtersSlice.actions;
export default filtersSlice.reducer;
