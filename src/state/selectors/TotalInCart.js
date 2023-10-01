import { selector } from "recoil";
import { cartState } from "../atoms/cartState";

export const TotalInCart = selector({
	key: "TotalCart",
	get: ({ get }) => {
		const state = get(cartState);
		return state.length;
	},
});
