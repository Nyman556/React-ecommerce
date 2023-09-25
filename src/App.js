import "./App.css";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { ExplorePage } from "./pages/explorePage";
import { HomePage } from "./pages/homePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
	return (
		<Router>
			<div className="App">
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
