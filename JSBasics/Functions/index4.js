// Fetch API Practise
// Second Parameter : is an Object
// Custom GET/Fetch Method

const request_joke = async (category) => {
	const custom_joke = await fetch(
		`https://api.chucknorris.io/jokes/random?category=${category}`,
		{
			method: "GET",
			headers: {
				Accept: "application/json",
			},
		}
	);
	const response = await custom_joke.json();
	console.log(response);
};

request_joke("dev");
