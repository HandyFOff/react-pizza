import { useSelector } from "react-redux";
import Catalog from "../../components/Catalog";
import Categories from "../../components/Categories";
import Sort from "../../components/Sort";
import styles from "./Home.module.scss";
import { selectFilters } from "../../redux/slices/filterSlice";
import { useAppDispatch } from "../../redux/store";
import { useEffect } from "react";
import { fetchPizza } from "../../redux/slices/pizzaSlice";

const Home: React.FC = () => {
  const { sort, categories, currentPage, searchValue } =
    useSelector(selectFilters);

  const dispatch = useAppDispatch();

  const sortProperty = sort.currentSortProperty;
  const filterProperty = categories.currentCategoryProperty;
  const pageProperty = currentPage;

  useEffect(() => {
    dispatch(
      fetchPizza({
        sortProperty,
        filterProperty,
        pageProperty: String(pageProperty),
        searchValue,
      })
    );
  }, [dispatch, sortProperty, filterProperty, pageProperty, searchValue]);

  return (
    <section className={styles.home}>
      <div className={styles.top}>
        <Categories />
        <Sort />
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>Все пиццы</h1>
        <Catalog />
      </div>
    </section>
  );
};

export default Home;
