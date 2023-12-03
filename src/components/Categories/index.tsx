import { memo } from "react";
import styles from "./Categories.module.scss";
import { useSelector } from "react-redux";
import { selectCategories } from "../../redux/slices/filters/selectors";
import { CategoriesItem } from "..";

export const Categories: React.FC = memo(() => {
  const categories = useSelector(selectCategories);

  return (
    <div className={styles.categories}>
      {categories.list?.map((title: string, index: number) => (
        <CategoriesItem key={index} id={index} title={title} active={categories.currentCategory}/>
      ))}
    </div>
  );
});
