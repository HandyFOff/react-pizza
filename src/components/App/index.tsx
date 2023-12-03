import Layout from "../../layouts/Layout";
import Home from "../../pages/Home";
import { Route, Routes } from "react-router-dom";
import { lazy } from "@loadable/component";
import { Suspense } from "react";

const Cart = lazy(
  () => import(/* webpackChunkName: "Cart" */ "../../pages/Cart")
);
const FullPizza = lazy(
  () => import(/* webpackChunkName: "FullPizza" */ "../../pages/FullPizza")
);
const NotFound = lazy(
  () => import(/* webpackChunkName: "NotFound" */ "../../pages/NotFound")
);

export const App: React.FC = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path={"/cart"}
          element={
            <Suspense fallback={<div>Загружаем корзину...</div>}>
              <Cart />
            </Suspense>
          }
        />
        <Route
          path={"/pizza/:id"}
          element={
            <Suspense fallback={<div>Загружаем пиццу...</div>}>
              <FullPizza />
            </Suspense>
          }
        />
        <Route
          path={"*"}
          element={
            <Suspense fallback={<div>Ничего не загружаем :D</div>}>
              <NotFound />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
};
