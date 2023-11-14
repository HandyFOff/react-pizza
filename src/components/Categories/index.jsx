import { useContext, useState } from "react";
import styles from "./Categories.module.scss";
import CategoriesItem from "./CategoriesItem";
import { AppContext } from "../../context";

const Categories = () => {
  const [active, setActive] = useState(0);
  const { categories } = useContext(AppContext);

  return (
    <div className={styles.categories}>
      {categories.map((title, index) => (
        <CategoriesItem
          key={index}
          id={index}
          title={title}
          active={active}
          setActive={setActive}
        />
      ))}
    </div>
  );
};

export default Categories;
