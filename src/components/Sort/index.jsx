import { useContext, useState } from "react";
import styles from "./Sort.module.scss";
import { AppContext } from "../../context";

const Sort = () => {
  const { setSort } = useContext(AppContext);
  const list = ["популярности", "цене", "алфавиту"];
  const [opened, setOpened] = useState(false);
  const [selected, setSelected] = useState(0);

  const handlerSort = (item, index) => {
    setSort(item);
    setSelected(index);
  };

  return (
    <div className={styles.sort}>
      <div className={styles.dropdownBtn}>
        <img src="assets/icons/sort-arrow.svg" alt="sort arrow" />
        <h1>Сортировка по:</h1>
      </div>
      <span className={styles.title} onClick={() => setOpened((prev) => !prev)}>
        {list[selected]}
      </span>
      <div className={styles.dropdown + " " + (opened ? styles.opened : "")}>
        {list.map((item, index) => (
          <div
            className={
              styles.dropdownItem +
              " " +
              (selected === index ? styles.active : "")
            }
            key={index}
            onClick={() => handlerSort(item, index)}
          >
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sort;
