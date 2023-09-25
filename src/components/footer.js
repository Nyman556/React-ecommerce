import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";

import {
	FOOTER_LINKS_ABOUT,
	FOOTER_LINKS_BLOG,
	FOOTER_LINKS_POLICY,
} from "../constants/constants";
import { Btn } from "./btn";
import {
	BiLogoFacebookCircle,
	BiLogoInstagramAlt,
	BiLogoLinkedinSquare,
	BiLogoTwitter,
} from "react-icons/bi";

export function Footer() {
	return (
		<footer className=" mt-36  my-16 mx-60 py-4">
			<div className="flex justify-between border-b-2 py-4">
				<div>
					<img src={logo} />
				</div>
				<ul className="flex flex-col [&>a]:text-sm space-y-3 [&>a]:text-gray-400">
					<p>About Us</p>
					{FOOTER_LINKS_ABOUT.map((linkTitle, idx) => {
						return (
							<Link key={idx} className="hover:text-black">
								{linkTitle}
							</Link>
						);
					})}
				</ul>
				<ul className="flex flex-col [&>a]:text-sm space-y-3 [&>a]:text-gray-400">
					<p>Blog</p>
					{FOOTER_LINKS_BLOG.map((linkTitle, idx) => {
						return (
							<Link key={idx} className="hover:text-black">
								{linkTitle}
							</Link>
						);
					})}
				</ul>
				<ul className="flex flex-col [&>a]:text-sm space-y-3 [&>a]:text-gray-400">
					<p>Return Policy</p>
					{FOOTER_LINKS_POLICY.map((linkTitle, idx) => {
						return (
							<Link key={idx} className="hover:text-black">
								{linkTitle}
							</Link>
						);
					})}
				</ul>
				<div className=" space-y-4 text-lightGray">
					<h6>Subscribe</h6>
					<p>Join our mailing list for the latest updates and promotions.</p>
					<form className=" space-x-2">
						<input
							type="email"
							placeholder="Enter your email"
							className="border py-2 px-4"
						/>
						<Btn content="Subscribe" />
					</form>
					<p className=" text-xs">
						By subscribing, you agree to our Privacy Policy and consent to
						receive updates from us.
					</p>
				</div>
			</div>
			<div className="flex justify-between pt-4 text-gray-400">
				<p>© 2023 TrendFusion. All rights reserved. </p>
				<div className="space-x-10">
					<Link className="underline">Privacy Policy</Link>
					<Link className="underline">Terms of Service</Link>
					<Link className="underline">Cookie Policy</Link>
				</div>
				<div className="flex text-darkCyan">
					<a href="https://www.facebook.com/">
						<BiLogoFacebookCircle size={25} />
					</a>
					<a href="https://www.instagram.com/">
						<BiLogoInstagramAlt size={25} />
					</a>
					<a href="https://www.twitter.com/">
						<BiLogoTwitter size={25} />
					</a>
					<a href="https://www.linkedin.com/">
						<BiLogoLinkedinSquare size={25} />
					</a>
				</div>
			</div>
		</footer>
	);
}
