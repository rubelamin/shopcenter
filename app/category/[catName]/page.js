import Hero from "@/components/Hero";
import Subscriber from "@/components/Subscriber";
import Loading from "@/components/common/Loading";
import CategorySidebar from "@/components/products/CategorySidebar";
import ProductCard from "@/components/products/ProductCard";
import { getProducts, getProductsByCategory } from "@/utils/getProducts";
import { Suspense } from "react";

export default async function ProductCategoryPage({ params: { catName } }) {
	let products;

	if (catName === "all") {
		products = await getProducts();
	} else {
		products = await getProductsByCategory(catName);
	}

	return (
		<>
			<Hero></Hero>

			<main>
				<Suspense fallback={<Loading />}>
					<section className="w-11/12 lg:w-10/12 max-w-7xl mx-auto py-0 lg:py-10 lg:flex justify-between items-start">
						<CategorySidebar activeCategory={catName} />

						<div className="sticky top-0 right-0 w-full lg:w-10/12 grid grid-cols-2 gap-4 lg:grid-cols-3 my-4 lg:my-10">
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
		</>
	);
}
