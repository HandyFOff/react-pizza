import { memo } from "react";
import { selectCategories } from "../../redux/slices/filterSlice";
import styles from "./Categories.module.scss";
import CategoriesItem from "./CategoriesItem";
import { useSelector } from "react-redux";

const Categories: React.FC = memo(() => {
  const categories = useSelector(selectCategories);

  return (
    <div className={styles.categories}>
      {categories.list?.map((title: string, index: number) => (
        <CategoriesItem key={index} id={index} title={title} active={categories.currentCategory}/>
      ))}
    </div>
  );
});

export default Categories;
