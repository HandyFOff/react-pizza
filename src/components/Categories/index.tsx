import { selectFilters } from "../../redux/slices/filterSlice";
import styles from "./Categories.module.scss";
import CategoriesItem from "./CategoriesItem";
import { useSelector } from "react-redux";

const Categories: React.FC = () => {
  const { categories } = useSelector(selectFilters);

  return (
    <div className={styles.categories}>
      {categories.list.map((title: string, index: number) => (
        <CategoriesItem key={index} id={index} title={title} />
      ))}
    </div>
  );
};

export default Categories;
