import styles from "./Catalog.module.scss";
import CatalogItem from "./CatalogItem";
import PizzaLoader from "../PizzaLoader";
import Paginate from "../Paginate";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../../redux/slices/filterSlice";
import Error from "./Error";
import { selectPizza } from "../../redux/slices/pizzaSlice";

interface IPizzaItem {
  id: number;
  title: string;
  imageUrl: string;
  sizes: number[];
  price: number;
  types: number[];
}

interface IPizzaInfo {
  items: IPizzaItem[];
  loading: boolean;
  error: boolean;
}

type PageType = {
  selected: number;
}

const Catalog: React.FC = () => {
  const { items, loading, error }: IPizzaInfo = useSelector(selectPizza);

  const dispatch = useDispatch();

  const renderItems = () => {
    return error ? (
      <Error />
    ) : loading ? (
      [...Array(4)].map((_, index) => <PizzaLoader key={index} />)
    ) : (
      items.map((item) => <CatalogItem key={item.id} {...item} />)
    );
  };

  const handlePageClick = ({selected}: PageType): void => {
    dispatch(setPage({ page: ++selected }));
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
