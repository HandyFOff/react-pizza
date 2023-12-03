import styles from "./CategoriesItem.module.scss";
import { useAppDispatch } from "../../../redux/store";
import { useCallback } from "react";
import { setCategory } from "../../../redux/slices/filters/slice";

interface IProps {
  title: string;
  id: number;
  active: number;
}

type HandlerActiveType = (idx: number) => void;

export const CategoriesItem: React.FC<IProps> = ({ title, id, active }) => {
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
