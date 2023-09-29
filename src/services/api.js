import axios from "axios";

const API_URL = "http://127.0.0.1:1337/api";

export async function getAllProducts() {
	try {
		const response = await axios.get(API_URL + "/products");
		return response.data.data;
	} catch (error) {
		console.error(error);
	}
}

export async function GetProductsById(catId) {
	try {
		const response = await axios.get(
			API_URL + `/products?[filters][categories][id]=${catId}`
		);
		return response.data.data;
	} catch (error) {
		console.error(error);
	}
}
