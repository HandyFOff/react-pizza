import { useState } from "react";
import styles from "./Sort.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { selectFilters, setSort } from "../../redux/slices/filterSlice";

interface IListItem {
  id: number;
  sortName: string;
  sort: string;
}

interface ISort {
  sort: {
    list: IListItem[];
  };
}

const Sort: React.FC = () => {
  const { sort }: ISort = useSelector(selectFilters);
  const dispatch = useDispatch();

  const [opened, setOpened] = useState<boolean>(false);
  const [selected, setSelected] = useState<number>(0);

  const handlerSort = (sortName: string, id: number): void => {
    dispatch(setSort({ property: sortName, propertyName: id }));
    setSelected(id);
  };

  const renderList = () => {
    return sort.list.map((item) => (
      <div
        className={
          styles.dropdownItem +
          " " +
          (selected === item.id ? styles.active : "")
        }
        key={item.id}
        onClick={() => handlerSort(item.sortName, item.id)}
      >
        <span>{item.sortName}</span>
      </div>
    ));
  };

  return (
    <div className={styles.sort}>
      <div className={styles.dropdownBtn}>
        <img src="assets/icons/sort-arrow.svg" alt="sort arrow" />
        <h1>Сортировка по:</h1>
      </div>
      <span className={styles.title} onClick={() => setOpened((prev) => !prev)}>
        {sort.list[selected].sortName}
      </span>
      <div className={styles.dropdown + " " + (opened ? styles.opened : "")}>
        {renderList()}
      </div>
    </div>
  );
};

export default Sort;
