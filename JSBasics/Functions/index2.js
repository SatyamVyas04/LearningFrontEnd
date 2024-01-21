// Fetch API Practise
// Second Parameter : is an Object

const get_jokes = async () => {
	const joke_response = await fetch("https://icanhazdadjoke.com", {
		method: "GET",
		headers: {
			Accept: "application/json",
			// Accept: "text/plain",
			// Accept: "text/html",
		},
	});

	const parsed_joke = await joke_response.json();
	// const parsed_joke = await joke_response.text();
	console.log(parsed_joke);
	console.log(parsed_joke.joke);
};

get_jokes();
