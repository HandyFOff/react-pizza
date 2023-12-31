export type TCartItem = {
  id: string;
  imageUrl: string;
  title: string;
  type: string;
  size: number;
  price: number;
  count: number;
};

export interface ICartSliceState {
  totalPrice: number;
  totalPositions: number;
  data: TCartItem[];
}
