import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchPizzaById } from "../../redux/slices/data/actions";
import { useAppDispatch } from "../../redux/store";
import { useSelector } from "react-redux";
import { selectPizza } from "../../redux/slices/data/selectors";
import { CatalogItem, PizzaLoader } from "../../components";

const FullPizza: React.FC = () => {
  const { id } = useParams();
  const store = useSelector(selectPizza);
  const dispatch = useAppDispatch();
  const currentPizza = store.items.find(item => item.id === id) || store.selectedItem;

  useEffect(() => {
    if (!currentPizza && id) {
      dispatch(fetchPizzaById(id));
    }
  }, [dispatch, id, currentPizza])
  
  if (!currentPizza) return <PizzaLoader/>;

  return (
    // <div className={styles.item}>
    //   <div className={styles.img}>
    //     <img
    //       src={currentPizza.imageUrl}
    //       alt="Pizza img"
    //       loading="lazy"
    //     />
    //   </div>
    //   <div className={styles.infoBlock}>
    //     <h1 className={styles.title}>{currentPizza.title}</h1>
    //     <div className={styles.settings}>
    //       <div className={styles.slices}>
    //         <span>Типы пиццы:</span>
    //         <div className={styles.slicesBlock}>
    //           {currentPizza.types.map((obj: number, index: number) => (
    //             <div key={index} className={styles.slice}>
    //               <span>{pizzaTypes[obj]}</span>
    //             </div>
    //           ))}
    //         </div>
    //       </div>
    //       <div className={styles.sizes}>
    //         <span>Размеры пиццы:</span>
    //         {currentPizza.sizes.map((item: number, index: number) => (
    //           <div key={index} className={styles.size}>
    //             <span>{item} см.</span>
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //     <div className={styles.info}>
    //       <h1 className={styles.price}>Цена от {currentPizza.price} ₽</h1>
    //     </div>
    //   </div>
    // </div>
    <CatalogItem view="row" {...currentPizza}/>
  );
};

export default FullPizza;
