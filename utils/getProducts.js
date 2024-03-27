import { products } from "@/db/data";

export const getProducts = () => {
	return products;
};

export const getProductsByLimit = (limit) => {
	const limitNumber = Math.min(limit, products.length);

	return products.slice(0, limitNumber);
};

export const getProductById = async (productId) => {
	const desc = await products.find((item) => item.id == productId);

	return desc;
};

export const getProductsByCategory = async (catName) => {
	const categorised = await products.filter(
		(item) => item.category == catName
	);

	return categorised;
};

export const getCategories = async () => {
	const setOfCategory = new Set();
	await products.forEach((product) => setOfCategory.add(product.category));

	const categoryList = [...setOfCategory];

	return categoryList;
};
