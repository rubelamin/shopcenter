import CartActions from "./CartActions";
import Logo from "./Logo";

export default function Header() {
	return (
		<nav className="flex items-center justify-between w-11/12 lg:w-10/12 max-w-7xl py-5 lg:py-6 mx-auto">
			<div className="flex gap-5 items-center justify-between lg:w-8/12 text-[#1A1A1A]">
				<Logo />
			</div>
			<CartActions />
		</nav>
	);
}
