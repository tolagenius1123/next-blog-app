import PostForm from "./_components/PostForm";

export default function AddPost() {
	return (
		<main className="pt-2 px-10 h-[500px] md:h-[400px] text-center">
			<h1 className="text-2xl font-semibold">New Post</h1>
			<PostForm />
		</main>
	);
}
