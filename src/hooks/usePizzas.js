import axios from "axios";
const API = "https://react-pizza-api.up.railway.app/api";

export const usePizzas = () => {
  const getPizzas = async (page, sort, filter, search) => {
    try {
      console.log(sort);
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
