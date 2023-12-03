import { useSelector } from "react-redux";
import styles from "./Home.module.scss";
import { useAppDispatch } from "../../redux/store";
import { useEffect } from "react";
import { selectFilters } from "../../redux/slices/filters/selectors";
import { fetchPizza } from "../../redux/slices/data/actions";
import { Catalog, Categories, Sort } from "../../components";

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
