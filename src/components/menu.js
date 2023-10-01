import { BiBox, BiCartAlt, BiLogInCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
import {
	MENU_LINK_LIST_MEN,
	MENU_LINK_LIST_WOMEN,
	MENU_LINK_LIST_CUSTOMER_SUPPORT,
	MENU_LINK_LIST_STAY_CONNECTED,
} from "../constants/constants";
import { categoryState } from "../state/atoms/CategoryState";
import { subCategoryState } from "../state/atoms/SubCategoryState";
import { useSetRecoilState } from "recoil";

const linkContent = [
	MENU_LINK_LIST_MEN,
	MENU_LINK_LIST_WOMEN,
	MENU_LINK_LIST_CUSTOMER_SUPPORT,
	MENU_LINK_LIST_STAY_CONNECTED,
];

export function Menu({ setMenuToggle }) {
	const setCategory = useSetRecoilState(categoryState);
	const setSubCategory = useSetRecoilState(subCategoryState);

	function handleClick(cat, sub) {
		setCategory(cat);
		setSubCategory(sub);
		setMenuToggle(false);
	}

	return (
		<>
			<div className="flex justify-center space-x-16">
				{linkContent.map((linkContainer, idx) => {
					return (
						<ul className="space-y-16" key={idx}>
							{linkContainer.map((linkItem, idx) => {
								return (
									<Link
										key={idx}
										to={linkItem.path}
										onClick={() => {
											if (linkItem.singular) {
												handleClick(
													linkItem.connectedWithCategory,
													linkItem.singular
												);
											}
										}}
									>
										<li className="my-8">
											<p className="flex items-center space-x-2 ">
												<BiBox />
												<span>{linkItem.linkLabel}</span>
											</p>
											<span className=" text-gray-400">
												{linkItem.linkDesc}
											</span>
										</li>
									</Link>
								);
							})}
						</ul>
					);
				})}
			</div>
			<div className="w-3/3 px-24 py-4 bg-lightCyan">
				<div className="w-3/4 flex justify-between mx-auto">
					<p>
						Ready to get Started?{" "}
						<Link className="underline">Sign up for free</Link>
					</p>
					<div className="space-x-10">
						<Link to="/login" className="inline-flex items-center">
							<BiLogInCircle className="mx-2" />
							Login
						</Link>
						<Link
							to="/cart"
							className="inline-flex items-center"
							onClick={() => setMenuToggle(false)}
						>
							<BiCartAlt className="mx-2" />
							Cart
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}
