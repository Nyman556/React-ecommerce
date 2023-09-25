import { BiChevronRight } from "react-icons/bi";
import { Link } from "react-router-dom";

export function Btn({ content, variant, to }) {
	if (variant === "secondary") {
		return (
			<Link
				to={to}
				className=" px-2 py-2 lg:px-5 lg:py-3 border border-gray-400 rounded-md"
			>
				{content}
			</Link>
		);
	}
	if (variant === "special") {
		return (
			<Link
				to={to}
				className=" inline-flex items-center px-2 py-2 lg:px-5 lg:py-3"
			>
				{content} <BiChevronRight />
			</Link>
		);
	} else {
		return (
			<Link
				to={to}
				className="bg-darkCyan px-2 py-2 lg:px-5 lg:py-3 rounded-md text-white space-x-2 hover:bg-cyan-900 transition-colors"
			>
				{content}
			</Link>
		);
	}
}
