import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export const selectFilters = (state: RootState) => state.filters;

export const selectCategories = createSelector(selectFilters, (state) => state.categories); // memorize categories
export const selectSort = createSelector(selectFilters, (state) => state.sort); // memorize sort