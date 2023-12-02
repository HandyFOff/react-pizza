import { TCartItem } from "../redux/slices/cart/types";

export const calcTotalPositions = (items: TCartItem[]) => {
    return items.reduce((positions, obj) => {
        return obj.count + positions;
    }, 0)
}