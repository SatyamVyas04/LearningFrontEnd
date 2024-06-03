import { NavLink } from "react-router-dom";


const NavBar = () => {
	const pending = "bg-white text-black";
	const active = "bg-black text-white";

	return (
		<nav className="w-full border-2 border-black flex flex-row divide-x-2 divide-black items-center justify-evenly  flex-wrap">
			<NavLink
				to="/users"
				className={({ isActive, isPending }) =>
					[
						isPending ? `${pending}` : "",
						isActive ? `${active}` : "",
						"flex-1 text-center p-2",
					].join(" ")
				}
			>
				Users
			</NavLink>
			<NavLink
				to="/posts"
				className={({ isActive, isPending }) =>
					[
						isPending ? `${pending}` : "",
						isActive ? `${active}` : "",
						"flex-1 text-center p-2",
					].join(" ")
				}
			>
				Posts
			</NavLink>
			<NavLink
				to="/comments"
				className={({ isActive, isPending }) =>
					[
						isPending ? `${pending}` : "",
						isActive ? `${active}` : "",
						"flex-1 text-center p-2",
					].join(" ")
				}
			>
				Comments
			</NavLink>
		</nav>
	);
};

export default NavBar;
