import axios from "axios";
import { API } from "../components/App";

export const usePizzas = () => {
  const getPizzas = async (page, sort, filter, search) => {
    try {
      const response = await axios
        .get(
          `${API}/data?q=${search}&_page=${page}&_limit=4&_sort=${sort}${filter}`
        )
        .catch((e) => {
          throw new Error(e);
        });

      return response.data;
    } catch (error) {
      return error;
    }
  };

  return { getPizzas };
};
