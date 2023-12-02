import styles from "./Catalog.module.scss";
import CatalogItem from "./CatalogItem";
import PizzaLoader from "../PizzaLoader";
import Paginate from "../Paginate";
import { useSelector } from "react-redux";
import Error from "./Error";
import { useAppDispatch } from "../../redux/store";
import { useCallback } from "react";
import { selectPizza } from "../../redux/slices/data/selectors";
import { selectFilters } from "../../redux/slices/filters/selectors";
import { setPage } from "../../redux/slices/filters/slice";

const Catalog: React.FC = () => {
  const { items, loading, error } = useSelector(selectPizza);
  const { currentPage } = useSelector(selectFilters);

  const dispatch = useAppDispatch();

  const renderItems = () => {
    return error ? (
      <Error />
    ) : loading ? (
      [...Array(4)].map((_, index) => <PizzaLoader key={index} />)
    ) : (
      items.map((item) => <CatalogItem count={0} key={item.id} {...item} />)
    );
  };

  const handlePageClick = useCallback((selected: number): void => {
    dispatch(setPage(selected));
  }, [dispatch]);

  return (
    <div className={styles.catalog}>
      <div className={styles.content + " " + (error ? styles.error : "")}>
        {renderItems()}
      </div>
      <Paginate handlePageClick={handlePageClick} currentPage={currentPage} />
    </div>
  );
};

export default Catalog;
