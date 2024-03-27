import { getCategories } from "@/utils/getProducts";
import Link from "next/link";

export default async function CategorySidebar({ activeCategory }) {
	const categories = await getCategories();

	return (
		<div className="w-full pr-3 flex items-center justify-between lg:block lg:w-2/12 my-10 lg:my-0 lg:mt-4">
			<Link
				href={`/category/all`}
				className={`${
					activeCategory === "all" && "bg-[#ced3ca]"
				} hover:border-b border-black block h-6 box-border mt-5 pl-2 rounded-bl-md`}
			>
				All
			</Link>

			{categories?.map((cat, i) => (
				<Link
					href={`/category/${cat}`}
					key={cat + i}
					className={`${
						cat === activeCategory && "bg-[#ced3ca]"
					} hover:border-b border-black block h-6 box-border mt-5 pl-2 rounded-bl-md capitalize`}
				>
					{cat}
				</Link>
			))}
		</div>
	);
}
