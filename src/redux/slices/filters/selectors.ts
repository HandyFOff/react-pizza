import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export const selectFilters = (state: RootState) => state.filters;

export const selectCategories = createSelector(
  selectFilters,
  (state) => state.categories,
);

export const selectSort = createSelector(selectFilters, (state) => state.sort);

export const selectCurrentSortProperty = createSelector(
  selectFilters,
  (state) => state.sort.currentSortProperty,
);

export const selectCurrentCategoryProperty = createSelector(
  selectFilters,
  (state) => state.categories.currentCategoryProperty,
);

export const selectCurrentPage = createSelector(
  selectFilters,
  (state) => state.currentPage,
);

export const selectSearchValue = createSelector(
  selectFilters,
  (state) => state.searchValue,
);
