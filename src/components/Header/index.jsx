import styles from "./Header.module.scss";
import Navigation from "../Navigation";
import { Link } from "react-router-dom";
import Search from "../Search";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <Link to={"/"} className={styles.logo}>
          <img src="assets/logo.svg" alt="React Pizza logo" />
        </Link>
        <Search />
      </div>
      <Navigation />
    </header>
  );
};

export default Header;
