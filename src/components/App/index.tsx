import Layout from "../../layouts/Layout";
import Home from "../../pages/Home";
import { Route, Routes } from "react-router-dom";
import Cart from "../../pages/Cart";
import FullPizza from "../FullPizza";
import NotFound from "../../pages/NotFound";

const App = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={"/cart"} element={<Cart />} />
        <Route path={"/pizza/:id"} element={<FullPizza />} />
        <Route path={"*"} element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
