import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Next Blog App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${inter.className} w-full bg-zinc-200 h-screen`}>
				<Toaster />
				<main className="min-h-screen max-w-[800px] mx-auto bg-white flex flex-col justify-between border-x">
					<Header />
					{children}
					<Footer />
				</main>
			</body>
		</html>
	);
}
