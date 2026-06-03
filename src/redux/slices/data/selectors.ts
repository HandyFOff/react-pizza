import { RootState } from "../../store";

export const selectPizza = (state: RootState) => state.pizza;
export const selectPizzaById = (id: string) => (state: RootState) =>
  state.pizza.items.find((item) => item.id === id);
