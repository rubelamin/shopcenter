"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LinkButton({ activeCategory, cat }) {
	const router = useRouter();

	const handleLinkClick = (e) => {
		e.preventDefault();

		router.push(`/category/${cat}`);
	};

	return (
		<Link
			href={`/category/${cat}`}
			onClick={handleLinkClick}
			className={`${
				cat === activeCategory && "bg-[#ced3ca]"
			} hover:border-b border-black block h-6 box-border mt-5 pl-2 rounded-bl-md`}
		>
			{cat}
		</Link>
	);
}
