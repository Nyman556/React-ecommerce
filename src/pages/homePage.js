import { Btn } from "../components/btn";

export function HomePage() {
	return (
		<section className="flex flex-col justify-center my-12">
			<div className="flex justify-center my-12">
				<h1 className=" text-3xl lg:text-6xl leading-tight lg:w-2/5">
					Discover the Latest Fashion Trends for Men and Women
				</h1>
				<div className="mx-12">
					<p className=" lg:w-2/3">
						Stay ahead of the fashion curve with our curated collections of
						stylish clothing for both men and women.
					</p>
					<div className=" space-x-2 my-4">
						<Btn content="explore" />
						<Btn content="Shop Now" variant={true} />
					</div>
				</div>
			</div>
			<img
				className="w-11/12 self-center"
				src="https://images.unsplash.com/photo-1520484205608-f65d27ad0765?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2696&q=80"
			/>
		</section>
	);
}
