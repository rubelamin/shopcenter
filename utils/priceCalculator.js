export function priceCalculatorByPercent(price, percentage) {
	const pp = (price * percentage) / 100;

	const discountPrice = price - pp;

	return discountPrice.toFixed(2);
}
