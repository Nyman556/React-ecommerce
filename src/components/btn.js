import { BiChevronRight } from "react-icons/bi";

export function Btn({ content, variant }) {
	if (variant === "secondary") {
		return (
			<button className=" px-2 py-2 lg:px-5 lg:py-3 border border-gray-400 rounded-md">
				{content}
			</button>
		);
	}
	if (variant === "special") {
		return (
			<button className=" inline-flex items-center px-2 py-2 lg:px-5 lg:py-3">
				{content} <BiChevronRight />
			</button>
		);
	} else {
		return (
			<button className="bg-darkCyan px-2 py-2 lg:px-5 lg:py-3 rounded-md text-white space-x-2">
				{content}
			</button>
		);
	}
}
