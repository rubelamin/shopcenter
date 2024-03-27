export default function Hero({ children }) {
	return (
		<header className="h-[500px] bg-center flex flex-col-reverse bg-cover w-full bg-[url('/header.webp')]">
			{children}
		</header>
	);
}
