export type TPizza = {
  id: string;
  imageUrl: string;
  title: string;
  types: number[];
  sizes: number[];
  price: number;
  category: number;
  rating: number;
};

export interface IPizzaSliceState {
  items: TPizza[];
  error: boolean;
  loading: boolean;
}