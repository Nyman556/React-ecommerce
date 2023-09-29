import { BiBox, BiCartAlt, BiLogInCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
import {
	MENU_LINK_LIST_MEN,
	MENU_LINK_LIST_WOMEN,
	MENU_LINK_LIST_CUSTOMER_SUPPORT,
	MENU_LINK_LIST_STAY_CONNECTED,
} from "../constants/constants";
const linkContent = [
	MENU_LINK_LIST_MEN,
	MENU_LINK_LIST_WOMEN,
	MENU_LINK_LIST_CUSTOMER_SUPPORT,
	MENU_LINK_LIST_STAY_CONNECTED,
];

export function Menu() {
	return (
		<>
			<div className="flex justify-center space-x-16">
				{linkContent.map((linkContainer) => {
					return (
						<ul className="space-y-16">
							{linkContainer.map((linkItem, idx) => {
								return (
									<Link key={idx} to={linkItem.path}>
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
						<Link to="/cart" className="inline-flex items-center">
							<BiCartAlt className="mx-2" />
							Cart
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}

/* 
{listObjects.map((listItem, idx) => {
	return (
		<ul key={idx} className="space-y-16">
			{listItem.categories.map((category, idx) => {
				return (
					<Link key={idx} to="/">
						<li className="my-8">
							<p className="flex items-center space-x-2 ">
								<BiBox />
								<span>{category}</span>
							</p>
							<span className=" text-gray-400">
								T-shirts, Polos, and Button-Downs
							</span>
						</li>
					</Link>
				);
			})}
		</ul>
	);
})}
*/
