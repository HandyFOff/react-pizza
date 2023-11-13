import styles from './CartCatalog.module.scss';
import CartItem from './CartItem';

const CartCatalog = () => {
    return (  
        <div className={styles.catalog}>
            <CartItem/>
            <CartItem/>
            <CartItem/>
        </div>
    );
}
 
export default CartCatalog;