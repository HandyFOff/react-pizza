import { Header } from "../../components";
import styles from "./Layout.module.scss";
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
