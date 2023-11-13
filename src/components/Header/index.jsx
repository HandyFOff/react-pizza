import styles from './Header.module.scss';
import Navigation from "../Navigation";
import { Link } from 'react-router-dom';

const Header = () => {
    return (  
        <header className={styles.header}>
            <Link to={'/'} className={styles.logo}>
                <img src="assets/logo.svg" alt="React Pizza logo" />
            </Link>
            <Navigation/>
        </header>
    );
}
 
export default Header;