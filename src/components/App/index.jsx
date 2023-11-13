// import styles from "./App.module.scss";
import Layout from "../Layout";
import Home from "../../pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "../../pages/Cart";
import EmptyCart from "../../pages/Cart/EmptyCart";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path={'/cart'} element={<Cart/>}/>
          <Route path={'/empty'} element={<EmptyCart/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
