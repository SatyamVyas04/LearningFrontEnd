import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const animations = {
	initial: {
		y: 50,
		opacity: 0,
	},
	animate: {
		y: 0,
		opacity: 1,
	},
	exit: {
		y: 50,
		opacity: 0,
	},
};

const GetData = ({ path }) => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const API_URL = `https://jsonplaceholder.typicode.com/${path}`;
				const response = await fetch(API_URL);
				if (!response.ok) {
					throw new Error(`${response.status}`);
				}
				const data = await response.json();
				setData(data);
				setLoading(false);
			} catch (err) {
				setError(err.message);
				setLoading(false);
			}
		};

		fetchData();
	}, [path]);

	const renderKeyValuePairs = (obj) => {
		return Object.entries(obj).map(([key, value]) => (
			<div key={key}>
				<span className="text-emerald-400 opacity-50">{key}:</span>{" "}
				{typeof value === "object" && value !== null
					? renderNestedObject(value)
					: value}
			</div>
		));
	};

	const renderNestedObject = (obj) => {
		return (
			<div className="p-2 m-2 border-2 border-zinc-800 rounded-lg">
				{renderKeyValuePairs(obj)}
			</div>
		);
	};

	return (
		<div className="w-full flex flex-row flex-wrap items-center justify-center">
			<AnimatePresence mode="wait">
				{loading ? (
					<motion.div
						className="text-emerald-500 text-3xl p-12"
						key="loading"
						variants={animations}
						initial="initial"
						animate="animate"
						exit="exit"
					>
						Loading...
					</motion.div>
				) : error ? (
					<div className="text-emerald-500 text-3xl p-12">
						Error: {error}
					</div>
				) : (
					<motion.div
						className="w-full flex flex-row flex-wrap items-center justify-center"
						key="data"
						variants={animations}
						initial="initial"
						animate="animate"
						exit="exit"
					>
						{Array.isArray(data) ? (
							data.map((item) => (
								<div
									key={item.id}
									className="border-2 border-emerald-500 m-2 sm:m-4 p-4 rounded-lg grow"
								>
									{renderKeyValuePairs(item)}
								</div>
							))
						) : (
							<div>No data available</div>
						)}
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default GetData;
