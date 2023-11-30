import styles from "./Layout.module.scss";
import Header from "../../components/Header";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Outlet/>
    </div>
  );
};

export default Layout;
