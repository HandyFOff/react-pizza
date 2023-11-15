import axios from "axios";
import { API } from "../components/App";

export const usePizzas = () => {
  const getPizzas = async () => {
    try {
      const response = await axios.get(`${API}/pizzas`).catch((e) => {
        throw new Error(e);
      });

      return response.data;
    } catch (error) {
      return error;
    }
  };

  return { getPizzas };
};
