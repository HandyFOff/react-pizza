import styles from './Error.module.scss';

export const Error: React.FC = () => {
    return (  
        <div className={styles.error}>
            <h1 className={styles.title}>Произошла ошибка 😕</h1>
            <p className={styles.description}>Не удалось загрузить данные. Попробуйте зайти позже</p>
        </div>
    );
};