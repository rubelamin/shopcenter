"use client";

import Image from "next/image";
import { useState } from "react";

export default function ProductImage({ details }) {
	const [imgthumb, setImgThumb] = useState(details?.thumbnail);

	const handleImageThumb = (imgId) => {
		setImgThumb(imgId);
	};
	return (
		<div className="w-full lg:w-7/12 border border-slate-500/20 p-4">
			<Image
				src={imgthumb}
				className="w-[400px] h-[500px] mx-auto object-cover"
				width={400}
				height={500}
				alt=""
			/>
			<div className="flex flex-wrap gap-2 mt-4">
				{details?.images?.length > 0 &&
					details.images.map((img, i) => (
						<button
							key={img + i}
							onClick={() => handleImageThumb(img)}
						>
							<Image
								src={img}
								className="w-[70px] h-[70px] mx-auto border object-cover"
								width={0}
								height={0}
								sizes="100vw"
								alt={details?.title}
							/>
						</button>
					))}
			</div>
		</div>
	);
}
