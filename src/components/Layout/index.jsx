import styles from "./Layout.module.scss";
import Header from "../Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Outlet/>
    </div>
  );
};

export default Layout;
