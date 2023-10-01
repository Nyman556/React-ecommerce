import { atom } from "recoil";

// glabal state för cart
export const cartState = atom({
	key: "cartState",
	default: [],
});
