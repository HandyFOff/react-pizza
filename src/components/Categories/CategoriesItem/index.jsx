import styles from "./CategoriesItem.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../../../redux/slices/filterSlice";

const CategoriesItem = ({ title, id }) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.filters);

  const handlerToActive = () => {
    if (id === 0) {
      dispatch(setCategory({ propertyId: "", id }));
      return false;
    }
    dispatch(setCategory({ propertyId: `&category=${id}`, id }));
  };

  return (
    <div
      className={
        styles.item +
        " " +
        (data.categories.currentCategory === id ? styles.active : null)
      }
      onClick={handlerToActive}
    >
      <h1 className={styles.title}>{title}</h1>
    </div>
  );
};

export default CategoriesItem;
