import { Link } from "react-router-dom";
import { productState } from "../state/atoms/ProductState";
import { useSetRecoilState } from "recoil";

export function Product({ product }) {
	const setSelectedProduct = useSetRecoilState(productState);
	const { title, brand, thumbnail, price, images } = product.attributes;
	const thumbnailWidth = "?imwidth=500";

	// byter till image[0] vid hover på produktbilden
	function mouseOver(target) {
		target.src = images[0];
	}
	function mouseOut(target) {
		target.src = thumbnail + thumbnailWidth;
	}
	return (
		<Link
			to={"/product"}
			className="flex flex-col justify-end  h-fit rounded-xl p-4 max-w-xs cursor-pointer"
			onClick={() => {
				setSelectedProduct(product);
			}}
		>
			<div className="flex">
				<img
					className=" w-auto mb-2"
					src={thumbnail + thumbnailWidth}
					onMouseOver={(e) => mouseOver(e.target)}
					onMouseOut={(e) => mouseOut(e.target)}
				/>
			</div>
			<div className="flex flex-col text-lightGray">
				<p className=" text-s">{brand}</p>
				<p className=" text-sm">{title}</p>
				<p className="text-md">{price},00 kr</p>
			</div>
		</Link>
	);
}
