import { priceCalculatorByPercent } from "@/utils/priceCalculator";
import Link from "next/link";
import ProductImage from "./ProductImage";
import ProductRating from "./Ratings";

export default function ProductDetails({ details, params }) {
	return (
		<div className="w-11/12 lg:w-8/12 max-w-7xl mx-auto flex flex-col gap-12 lg:flex-row items-center justify-between">
			<ProductImage details={details} />
			<div className="w-full lg:w-5/12">
				<h1 className="italic text-xl lg:text-3xl font-serif font-semibold">
					{details?.title}
				</h1>
				<span className="text-[#919090] my-3">
					<Link href={`/category/${details?.category}`}>
						{details?.category}
					</Link>
				</span>

				<ProductRating rating={details?.rating} />

				<hr className="my-5 bg-black" />
				<div>
					<p className="my-3">
						<span className="text-rose-600 opacity-60 line-through">
							${details?.price}
						</span>
						<span className="font-bold text-2xl">
							$
							{priceCalculatorByPercent(
								details?.price,
								details?.discountPercentage
							)}
						</span>
					</p>
				</div>
				<div>
					<p className="leading-7">{details?.description}</p>
					<button className="w-full bg-[#1a1a1a] hover:bg-[#3a3a3a] text-center py-3 mt-5 text-white rounded-full">
						Add To Cart - $
						{priceCalculatorByPercent(
							details?.price,
							details?.discountPercentage
						)}
					</button>
				</div>
			</div>
		</div>
	);
}
