import { getProductsByLimit } from "@/utils/getProducts";
import { Suspense } from "react";
import Subscriber from "./Subscriber";
import Loading from "./common/Loading";
import ProductCard from "./products/ProductCard";

export default function HomePage() {
	const products = getProductsByLimit(12);
	return (
		<main>
			<Suspense fallback={<Loading />}>
				<section className="w-11/12 lg:w-10/12 max-w-7xl mx-auto py-10">
					<div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:grid-cols-4 my-4 lg:my-10">
						{products?.length > 0 &&
							products.map((product) => (
								<ProductCard
									key={product.id}
									product={product}
								/>
							))}
					</div>
				</section>
			</Suspense>

			<Subscriber />
		</main>
	);
}
