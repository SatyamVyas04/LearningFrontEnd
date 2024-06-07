import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Users from "./components/Users";
import Posts from "./components/Posts";
import Comments from "./components/Comments";

const NotFound = () => {
	return (
		<div className="w-full h-screen text-white flex flex-col justify-center items-center gap-4 text-center">
			<h1 className="text-emerald-400 sm:text-4xl text-lg">
				404 - Page Not Found
			</h1>
			<span className="sm:text-xl text-sm">
				Sorry, the page you are looking for could not be found.
			</span>
		</div>
	);
};

function App() {
	let location = useLocation();
	return (
		<main className="overflow-x-hidden">
			<NavBar />
			<AnimatePresence mode="wait">
				<Routes location={location} key={location.pathname}>
					<Route exact path="/" element={<Home />} />
					<Route path="users" element={<Users />} />
					<Route path="posts" element={<Posts />} />
					<Route path="comments" element={<Comments />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</AnimatePresence>
		</main>
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
