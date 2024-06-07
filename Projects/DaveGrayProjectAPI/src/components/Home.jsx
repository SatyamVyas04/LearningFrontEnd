import AnimatedPage from "./AnimatedPage";

function Home() {
	return (
		<AnimatedPage>
			<div className="w-full flex flex-col items-center justify-center p-8 gap-4 text-white h-screen">
				<h1 className="text-4xl">Home</h1>
				<p className="text-md text-emerald-500">
					Select any section to proceed
				</p>
			</div>
		</AnimatedPage>
	);
}

export default Home;
