import { memo, useCallback, useState } from "react";
import styles from "./Sort.module.scss";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../redux/store";
import { selectSort } from "../../redux/slices/filters/selectors";
import { setSort } from "../../redux/slices/filters/slice";

const Sort: React.FC = memo(() => {
  const sort = useSelector(selectSort);
  const dispatch = useAppDispatch();

  const [opened, setOpened] = useState(false);
  const [selected, setSelected] = useState(0);

  const handlerSort = useCallback(
    (sortName: string, id: number): void => {
      dispatch(setSort({ sortName, id }));
      setSelected(id);
    },
    [dispatch]
  );

  console.log('Sort rendered!');
  

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
});

export default Sort;
