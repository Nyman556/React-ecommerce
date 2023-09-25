import { Feature } from "../components/feature";
import { Hero } from "../components/hero";
import { HowItWorks } from "../components/howItWorks";

export function HomePage() {
	return (
		<main className="space-y-60">
			<Hero />
			<HowItWorks />
			<Feature />
		</main>
	);
}

//BiChevronUp
