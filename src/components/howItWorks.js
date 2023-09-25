import { Btn } from "../components/btn";
import { HOW_IT_WORKS_IMAGE_URLS } from "../constants/imageUrls";

export function HowItWorks() {
	return (
		<section className="my-12 mt-32 px-60 text-lightGray">
			<div className="flex flex-col text-center space-y-5">
				<p>Simplistic</p>
				<h3 className=" text-5xl">
					Discover our Stylish Collection <br /> for Every Occasion
				</h3>
				<p>
					At our online store, we make it easy for you to find the perfect
					outfit. Browse our wide selection <br /> of trendy clothes for men and
					women, and enjoy a seamless shopping experience
				</p>
			</div>
			<div className="flex justify-center space-x-12 my-12">
				<div className="text-center w-1/3 space-y-10">
					<img className=" w-max" src={HOW_IT_WORKS_IMAGE_URLS[0]} />
					<h5 className=" text-4xl">Find Your Style with Eease</h5>
					<p>
						Our Intuitive search and filter options help you quickly find the
						clothes that match your style preferences.
					</p>
				</div>
				<div className="text-center w-1/3 space-y-10">
					<img className=" w-max" src={HOW_IT_WORKS_IMAGE_URLS[1]} />
					<h5 className=" text-4xl">Shop with Confidence</h5>
					<p>
						We offer secure payment options and hassle-free returns, ensuring a
						worry-free shopping experience.
					</p>
				</div>
				<div className="text-center w-1/3 space-y-10">
					<img className=" w-max" src={HOW_IT_WORKS_IMAGE_URLS[2]} />
					<h5 className=" text-4xl">
						Stay on Top of the <br /> Latest Trends
					</h5>
					<p>
						Our curated collections is regulary updated with the latest fashion
						trends, so you can allways be in style.
					</p>
				</div>
			</div>
			<div className="flex justify-center space-x-5">
				<Btn content="Explore" to="/explore" />
				<Btn content="Sign up" variant="special" to="/login" />
			</div>
		</section>
	);
}
