import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { Product } from "../components/product";
import { Link } from "react-router-dom";

export function ShopPage({ products, category, subCategory }) {
	let breadCrumb = "All";
	if (category === 1) {
		breadCrumb = "Men";
	}
	if (category === 2) {
		breadCrumb = "Women";
	}
	return (
		<div className="flex flex-col w-2/3 self-center">
			{category !== 0 ? (
				<div className=" text-xl inline-flex items-center [&>*]:cursor-pointer">
					<span>All</span> <BiChevronRight /> <span>{breadCrumb}</span>
				</div>
			) : (
				<div>
					{breadCrumb !== "All" ? (
						<div className=" text-xl inline-flex items-center [&>*]:cursor-pointer">
							<span>All</span> <BiChevronRight /> <span>{breadCrumb}</span>
						</div>
					) : (
						<span className="text-xl">{breadCrumb}</span>
					)}
				</div>
			)}
			<p>Showing {products.length} Products</p>
			<div className="grid grid-cols-4 gap-1">
				{products.map((product, idx) => {
					return <Product key={idx} product={product} />;
				})}
			</div>
		</div>
	);
}
