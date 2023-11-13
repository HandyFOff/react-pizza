import styles from './Sort.module.scss';

const Sort = () => {
    return (  
        <div className={styles.sort}>
            <div className={styles.dropdownBtn}>
                <img src="assets/icons/sort-arrow.svg" alt="sort arrow" />
                <h1>Сортировка по:</h1>
            </div>
            <span className={styles.title}>популярности</span>
        </div>
    );
}
 
export default Sort;