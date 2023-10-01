import logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";
import {
	BiCartAlt,
	BiChevronDown,
	BiChevronUp,
	BiSearch,
} from "react-icons/bi";
import { useEffect, useRef, useState } from "react";
import { Menu } from "./menu";
import {
	MENU_LINK_LIST_MEN,
	MENU_LINK_LIST_WOMEN,
} from "../constants/constants";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoryState } from "../state/atoms/CategoryState";
import { subCategoryState } from "../state/atoms/SubCategoryState";
import { TotalInCart } from "../state/selectors/TotalInCart";

export function Header() {
	const header = useRef(null);
	const [menuToggle, setMenuToggle] = useState(false);
	const [categoriesToggle, setCategoriesToggle] = useState(false);
	const setCategory = useSetRecoilState(categoryState);
	const setSubCategory = useSetRecoilState(subCategoryState);
	const totalcartState = useRecoilValue(TotalInCart);

	// sätter sticky på headern vid scroll
	const scrollHandler = () => {
		if (header.current) {
			if (window.pageYOffset >= 60) {
				header.current.classList.add("sticky");
			} else {
				header.current.classList.remove("sticky");
			}
		}
	};

	// sätter subkategori och kategori, stänger kategorimenyn.
	function handleClick(cat, sub) {
		setCategory(cat);
		setSubCategory(sub);
		setCategoriesToggle(false);
	}

	useEffect(() => {
		window.addEventListener("scroll", scrollHandler);
		return () => window.removeEventListener("scroll", scrollHandler);
	}, []);

	return (
		<header
			className="top-0 bg-white z-10 border-b-2 border-gray-300"
			ref={header}
		>
			<div className="w-2/3 flex m-auto py-4  w-4/4 justify-between">
				<Link to="/">
					<img src={logo} alt="logo" />
				</Link>
				<nav className="flex items-center mx-24 space-x-10 text-lg">
					<Link to="/explore">Shop Now</Link>
					<Link to="/explore">New Arrivals</Link>
					<Link to="/explore">Sale</Link>
					<div>
						<button
							onClick={(e) => setCategoriesToggle(!categoriesToggle)}
							className="inline-flex items-center"
						>
							Categories{" "}
							{categoriesToggle ? <BiChevronUp /> : <BiChevronDown />}
						</button>
						{categoriesToggle ? (
							<div className="absolute z-10 flex space-x-10 bg-white border p-4">
								<div className="flex flex-col space-y-3 [&>a]:text-gray-400">
									<Link
										to="/shop"
										className=" text-xl hover:text-black"
										onClick={() => {
											handleClick(1, "");
										}}
									>
										Men's Clothing
									</Link>
									{MENU_LINK_LIST_MEN.map((category, idx) => {
										return (
											<Link
												key={idx}
												to={category.path}
												className=" text-sm hover:text-black"
												onClick={() => {
													handleClick(
														category.connectedWithCategory,
														category.singular
													);
												}}
											>
												{category.linkLabel}
											</Link>
										);
									})}
								</div>
								<div className="flex flex-col space-y-3 [&>a]:text-gray-400">
									<Link
										to="/shop"
										className=" text-xl hover:text-black"
										onClick={() => {
											handleClick(2, "");
										}}
									>
										Women's Clothing
									</Link>
									{MENU_LINK_LIST_WOMEN.map((category, idx) => {
										return (
											<Link
												key={idx}
												to={category.path}
												className=" text-sm hover:text-black"
												onClick={() => {
													handleClick(
														category.connectedWithCategory,
														category.singular
													);
												}}
											>
												{category.linkLabel}
											</Link>
										);
									})}
								</div>
							</div>
						) : null}
					</div>
				</nav>
				<div className="flex space-x-6">
					<div className="inline-flex items-center border p-2 bg-darkCyan text-white rounded-md">
						<input
							className="mx-2 focus:outline-none bg-darkCyan placeholder:text-white"
							type="text"
							placeholder="Search Categories..."
						/>
						<BiSearch />
					</div>
					<Link
						to="/cart"
						className="inline-flex items-center bg-darkCyan px-4 rounded-md text-white space-x-2 hover:bg-cyan-900 transition-colors"
					>
						<span>Cart</span> <BiCartAlt />{" "}
						{!totalcartState ? null : <span>{totalcartState}</span>}
					</Link>
					<button
						className="inline-flex items-center bg-darkCyan px-4 rounded-md text-white space-x-2 hover:bg-cyan-900 transition-colors"
						onClick={(e) => setMenuToggle(!menuToggle)}
					>
						<span>Menu</span> {menuToggle ? <BiChevronUp /> : <BiChevronDown />}
					</button>
				</div>
			</div>
			{menuToggle ? <Menu setMenuToggle={setMenuToggle} /> : null}
		</header>
	);
}
