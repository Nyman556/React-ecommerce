import axios from "axios";

const API_URL = "http://127.0.0.1:1337/api";
const MAX_PAGINATION = "pagination[pageSize]=100";

export async function getAllProducts() {
	try {
		const response = await axios.get(API_URL + "/products?" + MAX_PAGINATION);
		return response.data.data;
	} catch (error) {
		console.error(error);
	}
}

export async function GetProductsByCatId(catId) {
	try {
		const response = await axios.get(
			API_URL + `/products?[filters][categories][id]=${catId}&` + MAX_PAGINATION
		);
		return response.data.data;
	} catch (error) {
		console.error(error);
	}
}

export async function GetProductsByCatAndSubCat(catId, subCatName) {
	try {
		const response = await axios.get(
			API_URL +
				`/products?[filters][categories][id]=${catId}&[filters][sub_categories][title]=${subCatName}&` +
				+MAX_PAGINATION
		);
		return response.data.data;
	} catch (error) {
		console.error(error);
	}
}
