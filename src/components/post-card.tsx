import prisma from "@/lib/db";
import Link from "next/link";

export default async function PostCard() {
	const posts = await prisma.post.findMany({
		orderBy: {
			createdAt: "desc",
		},
	});

	return (
		<>
			{posts.map((post) => (
				<div
					key={post.id}
					className="mx-auto w-full md:w-[500px] mt-5 px-5 py-5 rounded-lg border border-zinc-300 cursor-pointer hover:shadow-md"
				>
					<p className="text-lg font-semibold">{post.title}</p>
					<p className="text-sm mt-2">
						{`${post.content.slice(0, 50)}... `}
						<Link
							href={`posts/${post.id}`}
							className="text-blue-400"
						>
							Read more
						</Link>{" "}
					</p>
					<div className="flex justify-end mt-2">
						<p className="text-sm">
							Author - <span className="">{post.author}</span>
						</p>
					</div>
				</div>
			))}
		</>
	);
}
