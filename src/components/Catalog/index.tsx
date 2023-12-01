import styles from "./Catalog.module.scss";
import CatalogItem from "./CatalogItem";
import PizzaLoader from "../PizzaLoader";
import Paginate from "../Paginate";
import { useSelector } from "react-redux";
import { setPage } from "../../redux/slices/filterSlice";
import Error from "./Error";
import { selectPizza } from "../../redux/slices/pizzaSlice";
import { useAppDispatch } from "../../redux/store";

const Catalog: React.FC = () => {
  const { items, loading, error } = useSelector(selectPizza);

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

  const handlePageClick = (selected: number): void => {
    dispatch(setPage(selected));
  };

  return (
    <div className={styles.catalog}>
      <div className={styles.content + " " + (error ? styles.error : "")}>
        {renderItems()}
      </div>
      <Paginate handlePageClick={handlePageClick} />
    </div>
  );
};

export default Catalog;
