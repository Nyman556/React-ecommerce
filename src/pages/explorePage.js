import { Link } from "react-router-dom";
import { Btn } from "../components/btn";
import { EXPLORE_IMAGE_URL } from "../constants/imageUrls";

export function ExplorePage() {
	return (
		<>
			<section className="flex flex-col justify-center my-12 px-60">
				<div className="relative self-center">
					<img className="-z-10" src={EXPLORE_IMAGE_URL} />
					<div className="text-4xl absolute top-96 left-52 [&>a]:bg-white [&>a]:p-4 space-x-96">
						<Link className="hover:bg-darkCyan transition-colors hover:text-white">
							Shop Women
						</Link>
						<Link className="hover:bg-darkCyan transition-colors hover:text-white">
							Shop Men
						</Link>
					</div>
				</div>
			</section>
		</>
	);
}
