import { BiCartAlt, BiLogInCircle } from "react-icons/bi";
import { Link } from "react-router-dom";

const listObjects = [
	{
		categories: ["Shirts", "pants", "Hoodies", "Accessories"],
		categoriesDesc: [
			"T-shirts, Polos, and Button-Downs",
			"Jeans, Chinos and Dress Pants",
			"Hoodies and Sweatshirts",
			"Belts, Hats and Sunglasses",
		],
	},
	{ categories: ["Dresses", "Tops", "Bottoms", "Accessories"] },
	{ categories: ["Contact Us", "FAQs", "Shipping", "Returns"] },
	{ categories: ["Newsletter", "Follow Us", "About Us"] },
];

export function Menu() {
	return (
		<>
			<div className="flex justify-center space-x-16">
				{listObjects.map((listItem, idx) => {
					return (
						<ul key={idx} className="space-y-16">
							{listItem.categories.map((category) => {
								return (
									<Link to="/">
										<li className=" my-8">
											<p>{category}</p>
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
			</div>
			<div className="flex justify-between w-4/4 px-24 py-4 bg-lightCyan">
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
		</>
	);
}
