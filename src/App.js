import "./App.css";
import { Header } from "./components/header";
import { ExplorePage } from "./pages/explorePage";
import { HomePage } from "./pages/homePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
	return (
		<Router>
			<div className="flex-column justify-center App">
				<Header />
				<div className="flex justify-center">
					<Routes>
						<Route path="/explore" element={<ExplorePage />} />
						<Route exact path="/" element={<HomePage />} />
					</Routes>
				</div>
			</div>
		</Router>
	);
}

export default App;
