import { useRecoilState, useRecoilValue } from "recoil";
import { productState } from "../state/atoms/ProductState";
import { Btn } from "../components/btn";
import { useLayoutEffect, useRef } from "react";
import { cartState } from "../state/atoms/cartState";
import { BiChevronLeft } from "react-icons/bi";
import { Link } from "react-router-dom";

export function ProductPage() {
	const selectedProduct = useRecoilValue(productState);
	const [cart, setCart] = useRecoilState(cartState);
	const thumbnailElement = useRef(null);
	const { title, desc, brand, thumbnail, price, images, code } =
		selectedProduct.attributes;
	const thumbnailWidth = "?imwidth=500";
	const imageBulkWidth = "?imwidth=70";

	function mouseOver(target) {
		thumbnailElement.current.src = target.src.slice(0, 113) + thumbnailWidth;
	}
	function mouseOut() {
		thumbnailElement.current.src = thumbnail + thumbnailWidth;
	}

	useLayoutEffect(() => {
		window.scrollTo(0, 0);
	});

	return (
		<div className="w-2/3  py-4 flex flex-col">
			<div className=" py-4">
				<Link to="/shop" className=" inline-flex items-center space-x-2">
					<BiChevronLeft /> <span>back</span>
				</Link>
			</div>
			<div className="flex space-x-4">
				<div className="flex space-x-4">
					{images ? (
						<div className=" space-y-4">
							{images.map((image, idx) => {
								return (
									<img
										key={idx}
										src={image + imageBulkWidth}
										onMouseOver={(e) => mouseOver(e.target)}
										onMouseOut={() => mouseOut()}
										alt="alternative of product"
									/>
								);
							})}
						</div>
					) : null}
					<img
						className="mb-2"
						src={thumbnail + thumbnailWidth}
						ref={thumbnailElement}
						alt="thumbnail"
					/>
				</div>
				<div className="flex flex-col space-y-8">
					<p className=" text-xl">{brand}</p>
					<p className=" text-4xl max-w-sm text-lightGray">{title}</p>
					<p>code: {code}</p>
					<p className="text-4xl">{price},00 kr</p>
					<div className="flex space-x-4">
						<button
							className="bg-darkCyan px-2 py-2 lg:px-5 lg:py-3 rounded-md text-white space-x-2 hover:bg-cyan-900 transition-colors"
							onClick={() => {
								setCart([...cart, selectedProduct]);
							}}
						>
							Add To Cart
						</button>
						<Link
							className="px-2 py-2 lg:px-5 lg:py-3 border border-gray-400 rounded-md"
							to="/cart"
							onClick={() => {
								setCart([...cart, selectedProduct]);
							}}
						>
							Buy Now
						</Link>
					</div>
					<p className=" max-w-sm text-md">{desc}</p>
				</div>
			</div>
		</div>
	);
}
