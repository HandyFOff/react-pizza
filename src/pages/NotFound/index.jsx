import styles from "./NotFound.module.scss";

const NotFound = () => {
  return (
    <div className={styles.error}>
      <h1 className={styles.title}>Страница не найдена 😕</h1>
      <p className={styles.description}>
        Данной страницы не существует. Если страница существовала, то напишите
        администрации сайта.
      </p>
    </div>
  );
};

export default NotFound;
