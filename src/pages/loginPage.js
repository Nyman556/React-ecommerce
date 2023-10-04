import { Link } from "react-router-dom";
import { LOGIN_IMAGE_URL } from "../constants/imageUrls";

export function LoginPage() {
	return (
		<div className="flex justify-center place-items-center space-x-24 m-24">
			<form className="flex flex-col space-y-10">
				<div>
					<h3 className="text-2xl font-semibold text-lightGray">
						Welcome to TrendFusion
					</h3>
					<p className="text-sm text-gray-400">Sign in to your account</p>
				</div>
				<div className="flex flex-col">
					<label className="text-xs" htmlFor="username">
						Username
					</label>
					<input
						type="text"
						placeholder="Type in your Username"
						className="p-4 border rounded"
					/>
				</div>
				<div className="flex flex-col">
					<label className="text-xs" htmlFor="password">
						Password
					</label>
					<input
						type="password"
						placeholder="6+ strong character"
						className="p-4 border rounded"
					/>
				</div>
				<button className="bg-darkCyan px-2 py-2 lg:px-5 lg:py-3 rounded-md text-white space-x-2 hover:bg-cyan-900 transition-colors text-xl">
					Sign In
				</button>
				<p>
					Don't have an account? <Link className=" text-blue-600">Sign Up</Link>
				</p>
			</form>
			<div className=" w-96">
				<img className="rounded-xl" src={LOGIN_IMAGE_URL} />
			</div>
		</div>
	);
}
