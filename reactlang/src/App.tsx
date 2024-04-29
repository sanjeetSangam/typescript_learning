import { Suspense, lazy } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header";
import Loader from "./components/Loader";

const Home = lazy(() => import("./components/Home"));
const Results = lazy(() => import("./components/Results"));
const Learning = lazy(() => import("./components/Learning"));
const Quiz = lazy(() => import("./components/Quiz"));

const App = () => {
	return (
		<Router>
			<Header />
			<Suspense fallback={<Loader />}>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/quiz" element={<Quiz />} />
					<Route path="/results" element={<Results />} />
					<Route path="/learn" element={<Learning />} />
				</Routes>
			</Suspense>
		</Router>
	);
};

export default App;
