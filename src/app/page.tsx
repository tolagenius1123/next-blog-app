import { HeroLogo } from "@/assets/icons";
import Image from "next/image";

export default function Home() {
	return (
		<main className="pt-2 md:pt-8 px-10 h-[500px] md:h-[400px] text-center">
			<Image
				src={HeroLogo}
				height={150}
				width={150}
				alt="Hero-Logo"
				className="mx-auto"
			/>
			<h1 className="mt-3 text-5xl font-semibold leading-[60px]">
				Welcome to my TechBlog
			</h1>
			<p className="text-lg mt-3">
				Get entertained with the lastest technology innovations in town.
			</p>
		</main>
	);
}
