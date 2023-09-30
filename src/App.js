import "./App.css";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { ExplorePage } from "./pages/explorePage";
import { HomePage } from "./pages/homePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ShopPage } from "./pages/ShopPage";
import { RecoilRoot } from "recoil";
import { ProductPage } from "./pages/productPage";

function App() {
	return (
		<Router>
			<RecoilRoot>
				<div className="App [&>section]:w-1/3">
					<Header />
					<div className="flex justify-center">
						<Routes>
							<Route exact path="/" element={<HomePage />} />
							<Route path="/explore" element={<ExplorePage />} />
							<Route path="/shop" element={<ShopPage />} />
							<Route path="/product" element={<ProductPage />} />
						</Routes>
					</div>
					<Footer />
				</div>
			</RecoilRoot>
		</Router>
	);
}

export default App;
