// import styles from "./App.module.scss";
import Layout from "../Layout";
import Home from "../../pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "../../pages/Cart";
import EmptyCart from "../../pages/Cart/EmptyCart";
import { AppContext } from "../../context";
import { useEffect, useState } from "react";
import axios from "axios";

export const API = "https://65535f5a5449cfda0f2e92ca.mockapi.io";

const App = () => {
  const [pizzas, setPizzas] = useState([]);
  const [categories] = useState([
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ]);
  const [sort, setSort] = useState();
  const [categoriesFilter, setCategoriesFilter] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const pizzas = await axios.get(`${API}/pizzas`).catch((e) => {
          throw new Error(e);
        });

        setIsLoading(false);
        setPizzas(pizzas.data);
      };

      fetchData();
    } catch (error) {
      return error;
    }
  }, []);

  return (
    <AppContext.Provider
      value={{
        pizzas,
        setPizzas,
        categoriesFilter,
        setCategoriesFilter,
        categories,
        sort,
        setSort,
        isLoading,
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
