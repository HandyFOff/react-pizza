import { useContext } from "react";
import styles from "./Catalog.module.scss";
import CatalogItem from "./CatalogItem";
import { AppContext } from "../../context";
import PizzaLoader from "../PizzaLoader";
import Paginate from "../Paginate";
import { useDispatch } from "react-redux";
import { setPage } from "../../redux/slices/filterSlice";

const Catalog = () => {
  const { isLoading, pizzas } = useContext(AppContext);

  const dispatch = useDispatch();

  const renderItems = () => {
    return isLoading
      ? [...Array(4)].map((_, index) => <PizzaLoader key={index} />)
      : pizzas.map((item) => <CatalogItem key={item.id} {...item} />);
  };

  const handlePageClick = (page) => {
    dispatch(setPage({page: ++page.selected}));
  };

  return (
    <div className={styles.catalog}>
      <div className={styles.content}>{renderItems()}</div>
      <Paginate handlePageClick={handlePageClick} />
    </div>
  );
};

export default Catalog;
