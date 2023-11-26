import { useSelector } from 'react-redux';
import styles from './CartCatalog.module.scss';
import CartItem from './CartItem';

const CartCatalog = () => {
    const data = useSelector((state) => state.cart.data);

    return (  
        <div className={styles.catalog}>
            {data.map((item, index) =>
                <CartItem
                    key={index}
                    id={item.id}
                    imageUrl={item.imageUrl}
                    title={item.title}
                    type={item.type}
                    size={item.size}
                    price={item.price}
                />
            )}
        </div>
    );
}
 
export default CartCatalog;