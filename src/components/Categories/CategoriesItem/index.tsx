import styles from "./CategoriesItem.module.scss";
import { setCategory } from "../../../redux/slices/filterSlice";
import { useAppDispatch } from "../../../redux/store";
import { useCallback } from "react";

interface IProps {
  title: string;
  id: number;
  active: number;
}

type HandlerActiveType = (idx: number) => void;

const CategoriesItem: React.FC<IProps> = ({ title, id, active }) => {
  const dispatch = useAppDispatch();

  const handlerToActive: HandlerActiveType = useCallback((idx) => {
    if (idx === 0) {
      dispatch(
        setCategory({ currentCategoryProperty: "", currentCategory: idx })
      );
    } else {
      dispatch(
        setCategory({
          currentCategoryProperty: `&category=${idx}`,
          currentCategory: idx,
        })
      );
    }
  }, [dispatch]);

  return (
    <div
      className={
        styles.item +
        " " +
        (active === id ? styles.active : null)
      }
      onClick={() => handlerToActive(id)}
    >
      <h1 className={styles.title}>{title}</h1>
    </div>
  );
};

export default CategoriesItem;
