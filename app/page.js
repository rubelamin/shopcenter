import Hero from "@/components/Hero";
import HomePage from "@/components/HomePage";

export default function Home() {
	return (
		<>
			<Hero>
				<div className="mb-5 w-10/12 max-w-7xl text-white mx-auto">
					<h1 className="text-2xl lg:text-3xl font-serif">
						Introducing LWS Shop Center
					</h1>
					<p>Your whole week at a glance</p>
					<button className="bg-[#ffd160] hover:bg-[#e4be60] border border-black w-60 mt-2 py-3 rounded-full text-center text-black">
						Get the Weekly Kit
					</button>
				</div>
			</Hero>
			<HomePage />
		</>
	);
}
