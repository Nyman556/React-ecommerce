import { Feature } from "../components/feature";
import { Hero } from "../components/hero";
import { HowItWorks } from "../components/howItWorks";

export function HomePage() {
	return (
		<main className="[&>section]:w-2/3 flex flex-col space-y-52">
			<Hero />
			<HowItWorks />
			<Feature />
		</main>
	);
}
