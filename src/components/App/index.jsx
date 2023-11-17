import Layout from "../Layout";
import Home from "../../pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "../../pages/Cart";
import EmptyCart from "../../pages/Cart/EmptyCart";
import { AppContext } from "../../context";
import { useEffect, useState } from "react";
import { usePizzas } from "../../hooks/usePizzas";
import { useSelector } from "react-redux";

const App = () => {
  const filters = useSelector((state) => state.filters);

  const sort = filters.sort.currentSortProperty;
  const filter = filters.categories.currentCategoryProperty;

  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const { getPizzas } = usePizzas();

  useEffect(() => {
    const fetchData = async () => {
      await getPizzas(page, sort, filter).then((res) => setPizzas(res));
      setIsLoading(false);
    };

    fetchData();
  }, [sort, page, filter]);

  return (
    <AppContext.Provider
      value={{
        pizzas,
        setPizzas,
        isLoading,
        setIsLoading,
        search,
        setSearch,
        setPage,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Layout />}>
            <Route index element={<Home />} />
            <Route path={"/cart"} element={<Cart />} />
            <Route path={"/empty"} element={<EmptyCart />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
