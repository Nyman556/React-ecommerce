import { Btn } from "../components/btn";
import { FEATURE_IMAGE_URL } from "../constants/imageUrls";

export function Feature() {
	return (
		<section className="flex px-60 my-12 mt-24">
			<div className=" w-2/4 flex flex-col justify-center space-y-8">
				<p>Shop</p>
				<h3 className=" text-5xl">
					Discover the Best Deals <br /> on Fashion
				</h3>
				<p>
					Experience hassle-free shopping with free shipping, easy returns, and
					exceptional customer service. Find the Latest trends and style for
					both men and women.
				</p>
				<div className="space-x-5">
					<Btn content="Learn More" />
					<Btn content="Sign Up" variant="special" />
				</div>
			</div>
			<img src={FEATURE_IMAGE_URL} className="w-2/4" />
		</section>
	);
}
