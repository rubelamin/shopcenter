import Image from "next/image";
import Link from "next/link";

export default function Logo() {
	return (
		<div className="flex items-center gap-2">
			<Image
				src="/svg/menu.svg"
				className="lg:hidden w-5 h-5"
				width={20}
				height={20}
				alt="menu"
			/>
			<Link href="/">
				<Image
					src="/lws-logo-black.svg"
					className="h-10"
					height={40}
					width={120}
					alt="logo"
				/>
			</Link>
		</div>
	);
}
