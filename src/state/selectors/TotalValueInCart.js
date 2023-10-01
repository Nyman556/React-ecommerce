import { selector } from "recoil";
import { cartState } from "../atoms/cartState";

export const TotalValueInCart = selector({
	key: "TotalValueInCart",
	get: ({ get }) => {
		const state = get(cartState);
		let value = 0;
		state.forEach((item) => {
			value = value + item.attributes.price;
		});
		return value;
	},
});
