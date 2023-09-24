import logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";
import { BiChevronDown, BiChevronUp, BiSearch } from "react-icons/bi";
import { useState } from "react";
import { Menu } from "./menu";

export function Header() {
	const [menuToggle, setMenuToggle] = useState(true);
	return (
		<>
			<div className="flex px-24 p-4 border-b-2 border-gray-500  w-4/4 justify-between">
				<Link to="/">
					<img src={logo} />
				</Link>
				<nav className="flex mx-24 space-x-10">
					<Link to="/explore">Shop Now</Link>
					<Link to="/explore">New Arrivals</Link>
					<Link to="/explore">Sale</Link>
					<Link to="/explore">
						<span className="inline-flex items-center">
							Categories <BiChevronDown />
						</span>
					</Link>
				</nav>
				<div className="inline-flex items-center border p-2 bg-darkCyan text-white rounded-md">
					<input
						className="mx-2 focus:outline-none bg-darkCyan placeholder:text-white"
						type="text"
						placeholder="Search Categories..."
					/>
					<BiSearch />
				</div>
				<button
					className="inline-flex items-center bg-darkCyan px-4 rounded-md text-white space-x-2"
					onClick={(e) => setMenuToggle(!menuToggle)}
				>
					<span>Menu</span> {menuToggle ? <BiChevronUp /> : <BiChevronDown />}
				</button>
			</div>
			{menuToggle ? <Menu /> : null}
		</>
	);
}
