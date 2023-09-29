import { Link, Navigate } from "react-router-dom";
import { EXPLORE_IMAGE_URL } from "../constants/imageUrls";
import { GetProductsById } from "../services/api";

export function ExplorePage({ setCategory, setProducts, setSubCategory }) {
	return (
		<main>
			<section className="flex flex-col justify-center my-12 px-60">
				<div className="relative self-center">
					<img className="-z-10" src={EXPLORE_IMAGE_URL} />
					<div className="text-4xl absolute top-96 left-56 [&>a]:bg-white [&>a]:p-4 space-x-96">
						<Link
							to="/shop"
							value={2}
							className="hover:bg-darkCyan transition-colors hover:text-white"
							onClick={(e) => {
								setCategory(2);
								setSubCategory("");
								GetProductsById(2).then((apiData) => {
									setProducts(apiData);
								});
							}}
						>
							Women
						</Link>
						<Link
							to="/shop"
							className="hover:bg-darkCyan transition-colors hover:text-white"
							onClick={(e) => {
								setCategory(1);
								setSubCategory("");
								GetProductsById(1).then((apiData) => {
									setProducts(apiData);
								});
							}}
						>
							Men
						</Link>
					</div>
				</div>
			</section>
		</main>
	);
}
