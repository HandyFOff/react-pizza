import { TPizza } from "../data/types";

export type TCartItem = Omit<
  TPizza,
  "rating" | "types" | "category" | "sizes"
> & {
  size: number;
  type: string;
  count: number;
};

export interface ICartSliceState {
  totalPrice: number;
  totalPositions: number;
  data: TCartItem[];
}
