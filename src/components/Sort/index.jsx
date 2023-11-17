import { useState } from "react";
import styles from "./Sort.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { setSort } from "../../redux/slices/filterSlice";

const Sort = () => {
  const data = useSelector((state) => state.filters.sort);
  const dispatch = useDispatch();

  const [opened, setOpened] = useState(false);
  const [selected, setSelected] = useState(0);

  const handlerSort = (sortName, id) => {
    dispatch(setSort({property: sortName, propertyName: id}))
    setSelected(id);
  };

  const renderList = () => {
    return data.list.map((item) => (
      <div
        className={
          styles.dropdownItem + " " + (selected === item.id ? styles.active : "")
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
        {data.list[selected].sortName}
      </span>
      <div className={styles.dropdown + " " + (opened ? styles.opened : "")}>
        {renderList()}
      </div>
    </div>
  );
};

export default Sort;
