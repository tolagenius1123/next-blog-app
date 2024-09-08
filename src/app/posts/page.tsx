import { Suspense } from "react";
import PostCard from "@/components/post-card";

// export const dynamic = "force-dynamic"

export default async function PostList() {
	return (
		<main className="px-5 md:px-10 h-[550px] md:h-[400px] text-center">
			<h1 className="text-2xl font-semibold">Recent Posts</h1>
			<div className="mt-4 md:mt-2 w-full h-[450px] md:h-[350px] mx-auto overflow-y-scroll custom-scrollbar px-5">
				<Suspense
					fallback={<div className="mt-10 text-xl">Loading...</div>}
				>
					<PostCard />
				</Suspense>
			</div>
		</main>
	);
}
