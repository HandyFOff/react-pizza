import Catalog from "../../components/Catalog";
import Categories from "../../components/Categories";
import Sort from "../../components/Sort";
import styles from "./Home.module.scss";

const Home: React.FC = () => {
  return (
    <section className={styles.home}>
      <div className={styles.top}>
        <Categories />
        <Sort />
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>Все пиццы</h1>
        <Catalog />
      </div>
    </section>
  );
};

export default Home;
