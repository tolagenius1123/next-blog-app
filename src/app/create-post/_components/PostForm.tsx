"use client";
import { useEffect, useRef } from "react";
import { useFormState } from "react-dom";
import { addPost } from "@/actions/actions";
import CustomButton from "@/components/button";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";

export default function PostForm() {
	const { toast } = useToast();
	const [error, action] = useFormState(addPost, {});
	const router = useRouter();
	const formRef = useRef<HTMLFormElement>(null);

	useEffect(() => {
		if (error?.success === true) {
			formRef.current?.reset();
			toast({
				variant: "custom",
				description: "Post added successfully",
			});
			setTimeout(() => {
				router.push("/posts");
			}, 2000);
		}
	}, [error?.success]);

	return (
		<form
			ref={formRef}
			action={action}
			className="mt-3 mx-auto w-full md:w-[400px] h-auto"
		>
			<div className="">
				<input
					type="text"
					name="title"
					id="title"
					className={`px-2 h-[40px] border rounded-md w-full text-sm ${
						error?.title
							? "outline-red-500 ring-red-500 border-red-500"
							: "outline-zinc-400 ring-zinc-300 border-zinc-300 "
					}`}
					placeholder="Enter title"
				/>
				{error?.title && (
					<div className="text-left text-sm text-red-500 mt-1">
						{error.title}
					</div>
				)}
			</div>
			<div className="mt-2">
				<textarea
					name="content"
					id="content"
					rows={5}
					className={`rounded-md resize-none p-2 text-sm w-full border ${
						error?.content
							? "outline-red-500 ring-red-500 border-red-500"
							: "outline-zinc-400 ring-zinc-300 border-zinc-300"
					}`}
					placeholder="Write content of post here"
				></textarea>
				{error?.content && (
					<div className="text-left text-sm text-red-500">
						{error.content}
					</div>
				)}
			</div>
			<div className="mt-2">
				<input
					type="text"
					name="author"
					id="author"
					className={`px-2 h-[40px] border rounded-md w-full text-sm ${
						error?.author
							? "outline-red-500 ring-red-500 border-red-500"
							: "outline-zinc-400 ring-zinc-300 border-zinc-300"
					}`}
					placeholder="Enter author"
				/>
				{error?.author && (
					<div className="text-left text-sm text-red-500 mt-1">
						{error.author}
					</div>
				)}
			</div>
			<CustomButton />
		</form>
	);
}
