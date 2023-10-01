import { useRecoilState, useRecoilValue } from "recoil";
import { cartState } from "../state/atoms/cartState";
import { useLayoutEffect } from "react";
import { TotalValueInCart } from "../state/selectors/TotalValueInCart";

export function CartPage() {
	const [cart, setCart] = useRecoilState(cartState);
	const cartValue = useRecoilValue(TotalValueInCart);

	const removeCartItem = (product) => {
		setCart((cart) => cart.filter((item) => item.id !== product.id));
	};

	useLayoutEffect(() => {
		window.scrollTo(0, 0);
	});

	return (
		<div className="w-2/3 flex my-8 justify-center space-x-16">
			<div className="flex flex-col [&>*]:bg-lightCyan space-y-4">
				<div className="p-4">
					<h3 className=" text-2xl">Cart</h3>
					<p>Total products in cart: {cart.length}</p>
				</div>
				{!cart.length ? (
					<h4 className="p-4">No Products to display...</h4>
				) : null}
				{cart.map((cartItem, idx) => {
					const { title, price, thumbnail, variant, size } =
						cartItem.attributes;
					return (
						<div
							key={idx}
							className=" bg-lightCyan flex justify-between p-4 w-96"
						>
							<div className="flex space-x-6">
								<img
									className=" w-32"
									src={thumbnail}
									alt="thumbnail of product"
								/>
								<div className="flex flex-col justify-between space-y-2">
									<p>{title}</p>
									<p className="text-xl">{price},00 kr</p>
									<p>
										color: {typeof variant !== "string" ? variant[0] : variant}
									</p>
									<p>size: {typeof size !== "string" ? size[0] : size}</p>
									<button
										className=" w-max self-start bg-darkCyan px-2 py-2 lg:px-5 lg:py-3 rounded-md text-white space-x-2 hover:bg-cyan-900 transition-colors"
										onClick={() => {
											removeCartItem(cartItem);
										}}
									>
										Remove
									</button>
								</div>
							</div>
						</div>
					);
				})}
			</div>
			<div className="flex flex-col justify-between bg-lightCyan p-4 max-h-40 w-96">
				<h3 className="text-2xl">your total is: {cartValue},00 kr</h3>
				<button className="bg-darkCyan px-2 py-2 lg:px-5 lg:py-3 rounded-md text-white space-x-2 hover:bg-cyan-900 transition-colors">
					Checkout
				</button>
			</div>
		</div>
	);
}

// <h3 className=" text-4xl">Cart</h3>
