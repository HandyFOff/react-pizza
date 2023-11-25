import { useSelector } from 'react-redux';
import styles from './CartCatalog.module.scss';
import CartItem from './CartItem';

const CartCatalog = () => {
    const data = useSelector((state) => state.cart.data);

    return (  
        <div className={styles.catalog}>
            {data.map((item) =>
                <CartItem
                    key={item.id}
                    id={item.id}
                    imageUrl={item.imageUrl}
                    title={item.title}
                    types={item.types}
                    sizes={item.sizes}
                    price={item.price}
                />
            )}
        </div>
    );
}
 
export default CartCatalog;