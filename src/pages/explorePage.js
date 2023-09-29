import { Link, Navigate } from "react-router-dom";
import { EXPLORE_IMAGE_URL } from "../constants/imageUrls";
import { GetProductsById } from "../services/api";
import { useRecoilState } from "recoil";
import { categoryState } from "../state/atoms/CategoryState";
import { subCategoryState } from "../state/atoms/SubCategoryState";

export function ExplorePage({ setProducts }) {
	const [category, setCategory] = useRecoilState(categoryState);
	const [subCategory, setSubCategory] = useRecoilState(subCategoryState);

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
