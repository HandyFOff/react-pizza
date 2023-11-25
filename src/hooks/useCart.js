import axios from "axios";
import { API } from "../components/App";

export const useCart = () => {
  const getData = async () => {
    try {
      const response = await axios.get(`${API}/cart`).catch((e) => {
        throw new Error(e);
      });

      return response.data;
    } catch (error) {
      return error;
    }
  };

  const deleteById = async (id) => {
    try {
      const response = await axios.delete(`${API}/cart/${id}`).catch((e) => {
        throw new Error(e);
      });

      return response.data;
    } catch (error) {
      return error;
    }
  };

  return { getData, deleteById };
};
