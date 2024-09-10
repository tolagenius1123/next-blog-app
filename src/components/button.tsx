"use client";
import { useFormStatus } from "react-dom";

type CustomButtonProps = {
	btnType: "submit" | "reset" | "button" | undefined;
	btnStyles: string;
	btnText: string;
	isLoadingText?: string;
	btnColor: string;
	action?: () => void;
};

export default function CustomButton({
	btnType,
	btnStyles,
	btnText,
	isLoadingText,
	btnColor,
	action,
}: CustomButtonProps) {
	const { pending } = useFormStatus();

	return (
		<button
			type={btnType}
			disabled={pending}
			className={`text-sm font-semibold text-white rounded-md cursor-pointer hover:bg-zinc-800 ${btnStyles} ${
				pending ? "bg-zinc-200" : btnColor
			}`}
			onClick={action}
		>
			{pending ? isLoadingText : btnText}
		</button>
	);
}
