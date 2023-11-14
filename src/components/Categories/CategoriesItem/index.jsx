import { useContext } from "react";
import styles from "./CategoriesItem.module.scss";
import { AppContext } from "../../../context";

const CategoriesItem = ({ title, active, id, setActive }) => {
  const { setCategoriesFilter } = useContext(AppContext);

  const handlerToActive = () => {
    if (title === 'Все') {
      console.log(title);
      setActive(id);
      setCategoriesFilter(null);

      return false;
    }
    setActive(id);
    setCategoriesFilter(id);
  };

  return (
    <div
      className={styles.item + " " + (active === id ? styles.active : null)}
      onClick={handlerToActive}
    >
      <h1 className={styles.title}>{title}</h1>
    </div>
  );
};

export default CategoriesItem;
