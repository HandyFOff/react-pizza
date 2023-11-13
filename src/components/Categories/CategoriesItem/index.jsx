import styles from "./CategoriesItem.module.scss";

const CategoriesItem = ({title}) => {
  return (
    <div className={styles.item}>
      <h1 className={styles.title}>{title}</h1>
    </div>
  );
};

export default CategoriesItem;
