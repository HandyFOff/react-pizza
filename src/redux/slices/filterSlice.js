import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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
  currentPage: 1,
};

const filtersSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.categories.currentCategoryProperty = action.payload.propertyId;
      state.categories.currentCategory = action.payload.id;
    },
    setSort: (state, action) => {
      state.sort.currentSortProperty = state.sort.list[action.payload.propertyName].sort;
      state.sort.currentSort = action.payload.property;
    },
    setPage: (state, action) => {
      state.currentPage = action.payload.page;
    }
  },
});

export const { setCategory, setSort, setPage } = filtersSlice.actions;
export default filtersSlice.reducer;
