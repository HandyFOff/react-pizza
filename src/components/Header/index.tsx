import styles from "./Header.module.scss";
import Navigation from "../Navigation";
import { Link, useLocation } from "react-router-dom";
import Search from "../Search";

const Header: React.FC = () => {
  const {pathname} = useLocation();

  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <Link to={"/"} className={styles.logo}>
          <img src="assets/logo.svg" alt="React Pizza logo" />
        </Link>
        <Search />
      </div>
      {pathname !== '/cart' ? <Navigation /> : null }
    </header>
  );
};

export default Header;
