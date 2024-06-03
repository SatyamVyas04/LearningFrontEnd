import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Users from "./components/Users";
import Posts from "./components/Posts";
import Comments from "./components/Comments";

function App() {
	let location = useLocation();
	return (
		<>
			<NavBar />
			<AnimatePresence mode="wait">
				<Routes location={location} key={location.pathname}>
					<Route path="/" element={<Home />} />
					<Route path="/users" element={<Users />} />
					<Route path="/posts" element={<Posts />} />
					<Route path="/comments" element={<Comments />} />
				</Routes>
			</AnimatePresence>
		</>
	);
}

function AppWrapper() {
	return (
		<BrowserRouter>
			<App />
		</BrowserRouter>
	);
}

export default AppWrapper;
