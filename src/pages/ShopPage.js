import { BiChevronRight } from "react-icons/bi";
import { Product } from "../components/product";
import { useRecoilState } from "recoil";
import { categoryState } from "../state/atoms/CategoryState";
import { subCategoryState } from "../state/atoms/SubCategoryState";
import { useEffect, useState } from "react";
import {
	GetProductsByCatId,
	GetProductsBySubCat,
	getAllProducts,
} from "../services/api";

export function ShopPage() {
	const [products, setProducts] = useState([]);
	const [category, setCategory] = useRecoilState(categoryState);
	const [subCategory, setSubCategory] = useRecoilState(subCategoryState);

	let breadCrumb;
	if (category === 1) {
		breadCrumb = "Men";
	}
	if (category === 2) {
		breadCrumb = "Women";
	}

	useEffect(() => {
		if (category === 0 && !subCategory) {
			getAllProducts().then((apiData) => {
				setProducts(apiData);
			});
		} else if ((category !== 0) & !subCategory) {
			GetProductsByCatId(category).then((apiData) => {
				setProducts(apiData);
			});
		} else if (subCategory) {
			GetProductsBySubCat(subCategory.toLowerCase()).then((apiData) => {
				setProducts(apiData);
			});
		}
	}, [category, subCategory]);

	return (
		<div className="flex flex-col w-2/3 self-center">
			<div className=" text-xl inline-flex items-center [&>*]:cursor-pointer">
				<span
					onClick={() => {
						setCategory(0);
					}}
				>
					All
				</span>{" "}
				{category !== 0 ? (
					<>
						<BiChevronRight /> <span>{breadCrumb}</span>
						{subCategory ? (
							<>
								<BiChevronRight /> <span>{subCategory}</span>
							</>
						) : null}
					</>
				) : null}
			</div>
			<p>Showing {products.length} Products</p>
			<div className="grid grid-cols-4 gap-1">
				{products.map((product, idx) => {
					return <Product key={idx} product={product} />;
				})}
			</div>
		</div>
	);
}
