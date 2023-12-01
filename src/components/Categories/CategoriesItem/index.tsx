import styles from "./CategoriesItem.module.scss";
import { useSelector } from "react-redux";
import { selectFilters, setCategory } from "../../../redux/slices/filterSlice";
import { useAppDispatch } from "../../../redux/store";

interface IProps {
  title: string;
  id: number;
}

type HandlerActiveType = (idx: number) => void;

const CategoriesItem: React.FC<IProps> = ({ title, id }) => {
  const dispatch = useAppDispatch();
  const { categories } = useSelector(selectFilters);

  const handlerToActive: HandlerActiveType = (idx) => {
    if (idx === 0) {
      dispatch(setCategory({ currentCategoryProperty: "", currentCategory: idx }));
    } else {
      dispatch(setCategory({ currentCategoryProperty: `&category=${idx}`, currentCategory: idx }));
    }
  };

  return (
    <div
      className={
        styles.item +
        " " +
        (categories.currentCategory === id ? styles.active : null)
      }
      onClick={() => handlerToActive(id)}
    >
      <h1 className={styles.title}>{title}</h1>
    </div>
  );
};

export default CategoriesItem;
