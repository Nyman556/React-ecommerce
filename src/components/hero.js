import { Btn } from "../components/btn";
import { HERO_IMAGE_URL } from "../constants/imageUrls";

export function Hero() {
	return (
		<section className="flex flex-col justify-center my-12 px-60">
			<div className="flex justify-between my-12 text-lightGray">
				<h1 className=" text-3xl lg:text-6xl leading-tight lg:w-2/5">
					Discover the Latest Fashion Trends for Men and Women
				</h1>
				<div className="self-center">
					<p className="">
						Stay ahead of the fashion curve with our curated collections of
						<br />
						stylish clothing for both men and women.
					</p>
					<div className=" space-x-2 my-4">
						<Btn content="explore" to="/explore" />
						<Btn content="Shop Now" variant="secondary" to="/explore" />
					</div>
				</div>
			</div>
			<img className="w-12/12" src={HERO_IMAGE_URL} />
		</section>
	);
}
