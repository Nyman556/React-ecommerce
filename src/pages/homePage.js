import { Btn } from "../components/btn";
import { Hero } from "../components/hero";
import { HowItWorks } from "../components/howItWorks";

export function HomePage() {
	return (
		<>
			<Hero />
			<HowItWorks />
			<section className="mx-24">
				<div>
					<p>Shop</p>
					<h3 className=" text-5xl">
						Discover the Best Deals <br /> on Fashion
					</h3>
					<p>
						Experience hassle-free shopping with free shipping, easy returns,
						and exceptional customer service. Find the Latest trends and style
						for both men and women.
					</p>
					<div className=" space-x-5">
						<Btn content="Learn More" />
						<Btn content="Sign Up" variant="special" />
					</div>
				</div>
			</section>
		</>
	);
}

//BiChevronUp
