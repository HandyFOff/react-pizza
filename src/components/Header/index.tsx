import styles from "./Header.module.scss";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { selectCart } from "../../redux/slices/cart/selectors";
import { Navigation, Search } from "..";

export const Header: React.FC = () => {
  const { pathname } = useLocation();

  const { data, totalPrice, totalPositions } = useSelector(selectCart);
  const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(data);
      localStorage.setItem("user_cart", json);
    }
    isMounted.current = true;
  }, [data]);

  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <Link to={"/"} className={styles.logo}>
          <img src="/assets/logo.svg" alt="React Pizza logo" loading="lazy"/>
        </Link>
        {pathname !== "/cart" ? <Search /> : null}
      </div>
      {pathname !== "/cart" ? (
        <Navigation totalPrice={totalPrice} totalPositions={totalPositions} />
      ) : null}
    </header>
  );
};