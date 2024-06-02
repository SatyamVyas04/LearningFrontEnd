import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Users from "./components/Users";
import Posts from "./components/Posts";
import Comments from "./components/Comments";

function App() {
	return (
		<Router>
			<NavBar />
			<Routes>
				<Route path="/" element={<Users />} />
				<Route path="/users" element={<Users />} />
				<Route path="/posts" element={<Posts />} />
				<Route path="/comments" element={<Comments />} />
			</Routes>
		</Router>
	);
}

export default App;
