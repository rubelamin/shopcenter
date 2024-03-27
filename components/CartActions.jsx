import Image from "next/image";

export default function CartActions() {
	return (
		<div className="flex items-center justify-end gap-2 lg:gap-5 lg:w-4/12">
			<Image
				src="/svg/avatar.svg"
				className="hidden lg:block w-[18px] h-[18px]"
				width={18}
				height={18}
				alt="login acount avatar"
			/>
			<Image
				src="/svg/shopping-Cart.svg"
				className="block w-5 h-5"
				width={20}
				height={20}
				alt="shopping cart icon"
			/>
		</div>
	);
}
