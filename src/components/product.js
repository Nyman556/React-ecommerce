export function Product({ product }) {
	const { title, desc, brand, thumbnail, price, images } = product.attributes;
	const thumbnailWidth = "?imwidth=500";
	const imageBulkWidth = "?imwidth=111";
	function mouseOver(x) {
		x.src = images[0];
	}
	function mouseOut(x) {
		x.src = thumbnail + thumbnailWidth;
	}
	return (
		<div
			className="flex flex-col justify-end  h-fit rounded-xl p-4 max-w-xs cursor-pointer"
			onClick={() => {}}
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
		</div>
	);
}
