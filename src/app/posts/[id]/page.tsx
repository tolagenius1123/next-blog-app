"use client";
import { deletePost, getPostById } from "@/actions/actions";
import { useEffect, useState } from "react";
import CustomButton from "@/components/button";
import { useRouter } from "next/navigation";

type Post = {
	id: string;
	title: string;
	content: string;
	author: string;
	createdAt: Date;
	updatedAt: Date;
};

export default function Post({ params }: { params: { id: string } }) {
	const [post, setPost] = useState<Post | null>(null);
	const { id } = params;

	const router = useRouter();

	const fetchPost = async (postId: string) => {
		try {
			const res = await getPostById(postId);
			setPost(res);
		} catch (error) {
			console.log(error);
		}
	};

	const deletePostById = async (postId: string) => {
		try {
			await deletePost(postId);
			router.push("/posts");
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchPost(id);
	}, [id]);

	if (!post) {
		return <div className="mt-10 text-xl text-center">Loading...</div>; // Loading state
	}

	return (
		<main className="px-5 md:px-10 h-[550px] md:h-[400px] text-center">
			<h1 className="text-2xl font-semibold">View Post</h1>
			<div className="mt-4 md:mt-2 w-full h-auto mx-auto px-5">
				<div className="mx-auto w-full md:w-[500px] mt-5 px-10 py-10 rounded-lg border border-zinc-300 cursor-pointer hover:shadow-md">
					<p className="text-lg font-semibold">{post?.title}</p>
					<p className="text-sm mt-2">{post?.content}</p>
					<div className="flex justify-center mt-3">
						<p className="text-sm font-medium">
							Author - <span className="">{post?.author}</span>
						</p>
					</div>
					<div className="mt-5 flex justify-end">
						<div className="flex items-center gap-3">
							<CustomButton
								btnType="button"
								btnStyles="px-4 py-2"
								btnText="Delete"
								isLoadingText="Deleting..."
								btnColor="bg-red-500"
								action={() => deletePostById(post.id)}
							/>
							<CustomButton
								btnType="submit"
								btnStyles="px-4 py-2"
								btnText="Edit"
								isLoadingText="Saving..."
								btnColor="bg-blue-500"
							/>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
