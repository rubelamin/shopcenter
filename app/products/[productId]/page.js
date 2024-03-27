import Loading from "@/components/common/Loading";
import ProductDetails from "@/components/products/ProductDetails";
import { getProductById } from "@/utils/getProducts";
import { Suspense } from "react";

export default async function ProductDetailsPage({ params: { productId } }) {
	const details = await getProductById(productId);

	return (
		<main className="h-auto">
			<section className="bg-[#fafaf2] h-full py-20">
				<Suspense fallback={<Loading />}>
					<ProductDetails details={details} />
				</Suspense>
			</section>
		</main>
	);
}
