"use server";
import { z } from "zod";
import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

const postSchema = z.object({
	title: z.string().min(1, "Title is required"),
	content: z.string().min(1, "Content is required"),
	author: z.string().min(1, "Author is required"),
});

type FormState =
	| {
			title?: string[];
			content?: string[];
			author?: string[];
			success?: boolean;
	  }
	| undefined;

const addPost = async (
	prevState: FormState,
	formData: FormData
): Promise<FormState | undefined> => {
	const result = postSchema.safeParse(Object.fromEntries(formData));

	if (result.success === false) {
		return result.error.formErrors.fieldErrors;
	}

	const data = result.data;
	console.log(data);

	const { title, content, author } = data;

	// if (title || content || author) {
	// 	return { success: true };
	// }

	const res = await prisma.post.create({
		data: {
			title,
			content,
			author,
		},
	});

	revalidatePath("/posts");

	if (res) {
		console.log(res);
		return { success: true };
	}
};

export { addPost };
