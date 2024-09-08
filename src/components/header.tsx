"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
	{
		href: "/",
		label: "Home",
	},
	{
		href: "/posts",
		label: "Posts",
	},
	{
		href: "/create-post",
		label: "Create Post",
	},
];

export default function Header() {
	const pathname = usePathname();

	return (
		<div className="px-4 py-4 flex justify-between border-b">
			<Link
				href="/"
				className="bg-black text-white px-[10px] py-2  rounded-full"
			>
				TB
			</Link>
			<div className="flex items-center gap-x-5">
				{navLinks.map((link) => (
					<Link
						href={link.href}
						key={link.label}
						className={`font-semibold text-sm ${
							pathname === link.href
								? "text-black"
								: "text-zinc-400"
						} `}
					>
						{link.label}
					</Link>
				))}
			</div>
		</div>
	);
}
