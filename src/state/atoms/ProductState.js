import { atom } from "recoil";

// glabal state för en enskild produkt
export const productState = atom({
	key: "productState",
	default: [],
});
