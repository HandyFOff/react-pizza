export type TCategories = {
  currentCategory: number;
  currentCategoryProperty: string;
  list?: string[];
};

export type TSortList = {
  id: number;
  sortName: string;
  sort: string;
};

export type TSort = {
  currentSort: string;
  currentSortProperty: string;
  list: TSortList[];
};

export interface IFilterSliceState {
  searchValue: string;
  categories: TCategories;
  sort: TSort;
  currentPage: number;
}