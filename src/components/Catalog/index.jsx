import styles from './Catalog.module.scss';
import CatalogItem from './CatalogItem';

const Catalog = () => {
    return (  
        <div className={styles.catalog}>
            <CatalogItem/>
            <CatalogItem/>
            <CatalogItem/>
            <CatalogItem/>
            <CatalogItem/>
            <CatalogItem/>
            <CatalogItem/>
            <CatalogItem/>
            <CatalogItem/>
            <CatalogItem/>
        </div>
    );
}
 
export default Catalog;