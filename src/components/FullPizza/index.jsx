import { useEffect } from "react";
import styles from "./FullPizza.module.scss";
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';
import { useState } from "react";

const FullPizza = () => {
  const { id } = useParams();

  const [item, setItem] = useState();

  const navigate = useNavigate();

  const API = "https://react-pizza-api.up.railway.app/api";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const {data} = await axios.get(`${API}/data/${id}`);

        setItem(data);
      } catch (error) {
        alert('УВЫ. Пицца не найдена D:');
        navigate('/');
      }
    }

    fetchData();
  }, [id, navigate]);
  
  if (!item) return "Loading...";

  return (
    <div className={styles.item}>
      <img
        className={styles.img}
        src={item.imageUrl}
        alt={item.title}
      />
      <h1 className={styles.title}>{item.title}</h1>
      <span className={styles.price}>{item.price}</span>
    </div>
  );
};

export default FullPizza;
