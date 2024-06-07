import AnimatedPage from "./AnimatedPage";
import GetData from "./Hooks/GetData";

function Posts() {
	return (
		<AnimatedPage>
			<div className="mt-16 w-full flex flex-col items-center justify-center p-2 sm:p-8 gap-4 text-white">
				<h1 className="text-4xl">Posts</h1>
				<div className="text-center flex flex-col">
					<div className="text-md">
						Displays a list of Posts fetched from
					</div>
					<code className="p-2 my-2 bg-zinc-800 text-emerald-500 text-semibold italic rounded-lg text-xs sm:text-base">
						https://jsonplaceholder.typicode.com/posts
					</code>
				</div>
				<GetData path="posts" />
			</div>
		</AnimatedPage>
	);
}

export default Posts;
