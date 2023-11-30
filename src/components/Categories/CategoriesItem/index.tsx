import styles from "./CategoriesItem.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { selectFilters, setCategory } from "../../../redux/slices/filterSlice";

interface IProps {
  title: string;
  id: number;
}

interface ICategories {
  categories: {
    currentCategory: number;
  }
}

const CategoriesItem: React.FC<IProps> = ({ title, id }) => {
  const dispatch = useDispatch();
  const { categories }: ICategories = useSelector(selectFilters);

  const handlerToActive = (): void | boolean => {
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
        (categories.currentCategory === id ? styles.active : null)
      }
      onClick={handlerToActive}
    >
      <h1 className={styles.title}>{title}</h1>
    </div>
  );
};

export default CategoriesItem;
