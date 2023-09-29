import "./App.css";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { ExplorePage } from "./pages/explorePage";
import { HomePage } from "./pages/homePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { getAllProducts } from "./services/api";

import { useEffect, useState } from "react";

function App() {
	const [products, setProducts] = useState([]);
	const [category, setCategory] = useState(0);
	const [subCategory, setSubCategory] = useState("");
	console.log(products);

	useEffect(() => {
		getAllProducts().then(setProducts);
	}, []);

	return (
		<Router>
			<div className="App [&>section]:w-1/3">
				<Header />
				<div>
					<Routes>
						<Route path="/explore" element={<ExplorePage />} />
						<Route exact path="/" element={<HomePage />} />
					</Routes>
				</div>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
