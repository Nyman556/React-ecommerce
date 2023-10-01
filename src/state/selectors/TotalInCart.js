import { selector } from "recoil";
import { cartState } from "../atoms/cartState";

// selector som ger tillbaks längden på cart arrayn
export const TotalInCart = selector({
	key: "TotalCart",
	get: ({ get }) => {
		const state = get(cartState);
		return state.length;
	},
});
