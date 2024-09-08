"use client";
import { useFormStatus } from "react-dom";

export default function CustomButton() {
	const { pending } = useFormStatus();

	return (
		<button
			type="submit"
			disabled={pending}
			className={`text-sm font-semibold text-white h-[40px] ${
				pending ? "bg-zinc-200" : "bg-zinc-950"
			} rounded-md cursor-pointer hover:bg-zinc-800 w-full py-1 mt-4`}
		>
			{pending ? "Adding Post..." : "Add Post"}
		</button>
	);
}
