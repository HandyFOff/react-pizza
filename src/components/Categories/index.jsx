import styles from './Categories.module.scss';
import CategoriesItem from './CategoriesItem';

const Categories = () => {
    return (  
        <div className={styles.categories}>
            <CategoriesItem title={'Все'}/>
            <CategoriesItem title={'Мясные'}/>
            <CategoriesItem title={'Вегетарианская'}/>
            <CategoriesItem title={'Гриль'}/>
            <CategoriesItem title={'Острые'}/>
            <CategoriesItem title={'Закрытые'}/>
        </div>
    );
}
 
export default Categories;