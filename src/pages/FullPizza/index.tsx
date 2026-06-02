import { useEffect } from "react";
import styles from "./FullPizza.module.scss";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { TPizza } from "../../redux/slices/data/types";

const pizzaTypes = ["тонкое", "традиционное"];

const FullPizza: React.FC = () => {
  const { id } = useParams();

  console.log(id);
  

  const [item, setItem] = useState<TPizza>();

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/pizza/${id}`);

        setItem(data);
      } catch (error) {
        alert("УВЫ. Пицца не найдена D:");
        navigate("/");
      }
    };

    fetchData();
  }, [id, navigate]);

  if (!item) return "Loading...";

  return (
    <div className={styles.item}>
      <div className={styles.img}>
        <img
          src={item.imageUrl}
          alt="Pizza img"
          loading="lazy"
        />
      </div>
      <div className={styles.infoBlock}>
        <h1 className={styles.title}>{item.title}</h1>
        <div className={styles.settings}>
          <div className={styles.slices}>
            <span>Типы пиццы:</span>
            <div className={styles.slicesBlock}>
              {item.types.map((obj: number, index: number) => (
                <div key={index} className={styles.slice}>
                  <span>{pizzaTypes[obj]}</span>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.sizes}>
            <span>Размеры пиццы:</span>
            {item.sizes.map((item: number, index: number) => (
              <div key={index} className={styles.size}>
                <span>{item} см.</span>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.info}>
          <h1 className={styles.price}>Цена от {item.price} ₽</h1>
        </div>
      </div>
    </div>
  );
};

export default FullPizza;
