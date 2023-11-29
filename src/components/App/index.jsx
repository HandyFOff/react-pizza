import Layout from "../Layout";
import Home from "../../pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "../../pages/Cart";
import EmptyCart from "../../pages/Cart/EmptyCart";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPizza } from "../../redux/slices/pizzaSlice";
import { selectFilters } from "../../redux/slices/filterSlice";

const App = () => {
  const { sort, categories, currentPage, searchValue } = useSelector(selectFilters);

  const dispatch = useDispatch();

  const sortProperty = sort.currentSortProperty;
  const filterProperty = categories.currentCategoryProperty;
  const pageProperty = currentPage;

  useEffect(() => {
    dispatch(
      fetchPizza({ sortProperty, filterProperty, pageProperty, searchValue })
    );
  }, [dispatch, sortProperty, filterProperty, pageProperty, searchValue]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={"/cart"} element={<Cart />} />
          <Route path={"/empty"} element={<EmptyCart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
