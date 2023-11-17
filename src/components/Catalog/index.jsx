import { useContext } from "react";
import styles from "./Catalog.module.scss";
import CatalogItem from "./CatalogItem";
import { AppContext } from "../../context";
import PizzaLoader from "../PizzaLoader";
import Paginate from "../Paginate";

const Catalog = () => {
  const { isLoading, pizzas, search, setPage } = useContext(AppContext);

  const renderItems = () => {
    return isLoading
      ? [...Array(4)].map((_, index) => <PizzaLoader key={index} />)
      : pizzas
          .filter((item) =>
            item.title.toLowerCase().includes(search.toLowerCase())
          )
          .map((item) => <CatalogItem key={item.id} {...item} />);
  };

  const handlePageClick = (page) => {
    setPage(++page.selected);
  };

  return (
    <div className={styles.catalog}>
      <div className={styles.content}>{renderItems()}</div>
      <Paginate handlePageClick={handlePageClick} />
    </div>
  );
};

export default Catalog;
