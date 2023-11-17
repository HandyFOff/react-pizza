import styles from "./Categories.module.scss";
import CategoriesItem from "./CategoriesItem";
import { useSelector } from "react-redux";

const Categories = () => {
  const data = useSelector((state) => state.filters.categories);

  return (
    <div className={styles.categories}>
      {data.list.map((title, index) => (
        <CategoriesItem
          key={index}
          id={index}
          title={title}
        />
      ))}
    </div>
  );
};

export default Categories;
