import { useRecoilState, useRecoilValue } from "recoil";
import { productState } from "../state/atoms/ProductState";
import { useLayoutEffect, useRef, useState } from "react";
import { cartState } from "../state/atoms/cartState";
import { BiChevronLeft } from "react-icons/bi";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function ProductPage() {
	const selectedProduct = useRecoilValue(productState);
	const [cart, setCart] = useRecoilState(cartState);
	const thumbnailElement = useRef(null);
	const { title, desc, brand, thumbnail, price, images, code, variant, size } =
		selectedProduct.attributes;

	const [selectedVariant, setSelectedVariant] = useState(
		typeof variant !== "string" ? variant[0] : variant
	);
	const [selectedSize, setSelectedSize] = useState(
		typeof size !== "string" ? size[0] : size
	);

	const thumbnailWidth = "?imwidth=500";
	const imageBulkWidth = "?imwidth=70";

	// funktion för toastify, res kommer från addToCart
	function notify(res) {
		if (res) {
			toast.success("Added to cart!");
		} else {
			toast.error("Product already in Cart");
		}
	}

	// funktioner för att byta bild på main-bilden vid hover
	function mouseOver(target) {
		thumbnailElement.current.src = target.src.slice(0, 113) + thumbnailWidth;
	}
	function mouseOut() {
		thumbnailElement.current.src = thumbnail + thumbnailWidth;
	}

	// kollar om produkten redan finns i cart, annars lägger den till den.
	function addToCart() {
		const found = cart.find((item) => {
			return item.id === selectedProduct.id;
		});
		if (!found) {
			const productToAdd = {
				...selectedProduct,
				selectedVariant,
				selectedSize,
			};

			notify(true);
			setCart([...cart, productToAdd]);
		} else {
			notify(false);
		}
	}

	// för att resetta scrollen vid link klick från andra routes
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
					<div className="flex flex-col space-y-2">
						<label htmlFor="variation-select">Color:</label>
						<select
							className="border text-xl"
							id="variation-select"
							onChange={(e) => {
								setSelectedVariant(e.target.value);
							}}
						>
							{typeof variant !== "string" ? (
								variant.map((variation, idx) => {
									return (
										<option key={idx} value={variation}>
											{variation}
										</option>
									);
								})
							) : (
								<option>{variant}</option>
							)}
						</select>
						<label htmlFor="size-select">Size:</label>
						<select
							className="border text-xl"
							id="size-select"
							placeholder="size"
							onChange={(e) => {
								setSelectedSize(e.target.value);
							}}
						>
							{typeof size !== "string" ? (
								size.map((sizeVariant, idx) => {
									return (
										<option key={idx} value={sizeVariant}>
											{sizeVariant}
										</option>
									);
								})
							) : (
								<option>{size}</option>
							)}
						</select>
					</div>
					<div className="flex space-x-4">
						<button
							className="bg-darkCyan px-2 py-2 lg:px-5 lg:py-3 rounded-md text-white space-x-2 hover:bg-cyan-900 transition-colors"
							onClick={() => {
								addToCart();
							}}
						>
							Add To Cart
						</button>
						<Link
							className="px-2 py-2 lg:px-5 lg:py-3 border border-gray-400 rounded-md"
							to="/cart"
							onClick={() => {
								addToCart();
							}}
						>
							Buy Now
						</Link>
					</div>
					<p className=" max-w-sm text-md">{desc}</p>
				</div>
			</div>
			<ToastContainer
				position="bottom-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				theme="light"
			/>
		</div>
	);
}
