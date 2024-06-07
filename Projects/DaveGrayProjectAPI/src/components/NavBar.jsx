import { NavLink } from "react-router-dom";

const NavBar = () => {
	const pending = "bg-zinc-900 text-emerald-500";
	const active = "bg-emerald-500 text-zinc-900";

	return (
		<nav className="fixed top-0 w-full bg-zinc-900 border-b-2 border-emerald-500 text-emerald-500 font-semibold flex flex-row divide-x-2 divide-emerald-500 items-center justify-evenly  flex-wrap">
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
