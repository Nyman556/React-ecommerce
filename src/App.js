import "./App.css";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { ExplorePage } from "./pages/explorePage";
import { HomePage } from "./pages/homePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { getAllProducts } from "./services/api";

import { useEffect, useState } from "react";
import { ShopPage } from "./pages/ShopPage";

function App() {
	const [products, setProducts] = useState([]);
	const [category, setCategory] = useState(0);
	const [subCategory, setSubCategory] = useState("shirt");

	useEffect(() => {
		getAllProducts().then((apiData) => {
			setProducts(apiData);
		});
	}, []);

	return (
		<Router>
			<div className="App [&>section]:w-1/3">
				<Header setCategory={setCategory} setSubCategory={setSubCategory} />
				<div className="flex justify-center">
					<Routes>
						<Route
							path="/explore"
							element={
								<ExplorePage
									setCategory={setCategory}
									setProducts={setProducts}
									setSubCategory={setSubCategory}
								/>
							}
						/>
						<Route exact path="/" element={<HomePage />} />
						<Route
							exact
							path="/shop"
							element={
								<ShopPage
									products={products}
									category={category}
									subCategory={subCategory}
								/>
							}
						/>
					</Routes>
				</div>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
