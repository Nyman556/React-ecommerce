import { useRecoilState } from "recoil";
import { productState } from "../state/atoms/ProductState";

export function ProductPage() {
	const [selectedProduct, setSelectedProduct] = useRecoilState(productState);
	const { title, desc, brand, thumbnail, price, images } =
		selectedProduct.attributes;
	const thumbnailWidth = "?imwidth=500";
	const imageBulkWidth = "?imwidth=70";

	return (
		<div>
			<div className="flex justify-between py-4">
				<div className="flex space-x-4">
					{images ? (
						<div className=" space-y-4">
							{images.map((image, idx) => {
								return <img key={idx} src={image + imageBulkWidth} />;
							})}
						</div>
					) : null}
					<img className="mb-2" src={thumbnail + thumbnailWidth} />
				</div>
				<div className="flex flex-col">
					<p className=" text-xl">{brand}</p>
					<p className=" text-xl max-w-xs text-lightGray">{title}</p>
					<p className="text-xl">{price},00 kr</p>
				</div>
			</div>
			<p className=" text-md">{desc}</p>
		</div>
	);
}
