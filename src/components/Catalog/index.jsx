import { useContext } from "react";
import styles from "./Catalog.module.scss";
import CatalogItem from "./CatalogItem";
import { AppContext } from "../../context";
import ContentLoader from "react-content-loader";

const MyLoader = (props) => (
  <ContentLoader
    speed={2}
    width={'100%'}
    height={'500'}
    viewBox="0 0 100% 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="1" y="1" rx="100%" ry="100%" width="100%" height="280" /> 
    <rect x="1" y="291" rx="8" ry="8" width="100%" height="24" /> 
    <rect x="1" y="337" rx="12" ry="12" width="100%" height="85" /> 
    <rect x="1" y="438" rx="12" ry="12" width="100%" height="40" /> 
  </ContentLoader>
)

const Catalog = () => {
  const { pizzas, categoriesFilter, sort, isLoading } = useContext(AppContext);

  return (
    <div className={styles.catalog}>
      {isLoading
        ? [...Array(10)].map((item, index) => <MyLoader key={index}/>)
        : pizzas
            .filter((item) =>
              categoriesFilter === null
                ? item
                : item.category === categoriesFilter
            )
            .sort((prev, next) =>
              sort === "популярности"
                ? next.rating - prev.rating
                : sort === "цене"
                ? prev.price - next.price
                : next.title - prev.title
            )
            .map((item) => <CatalogItem key={item.id} {...item} />)}
    </div>
  );
};

export default Catalog;
