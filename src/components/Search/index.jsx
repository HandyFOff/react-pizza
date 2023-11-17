import { useContext } from "react";
import styles from "./Search.module.scss";
import { AppContext } from "../../context";

const Search = () => {
  const { search, setSearch } = useContext(AppContext);

  return (
    <div className={styles.inputBlock}>
      <input
        className={styles.input}
        type="text"
        value={search}
        placeholder="Поиск..."
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default Search;
