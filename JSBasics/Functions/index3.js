// Fetch API Practise
// Second Parameter : is an Object
// POST Method

const joke_obj = {
	id: "123123",
	joke: "Hahaha lmao xd ded",
};

const post_jokes = async (jokeobj) => {
	const joke_response = await fetch("https://httpbin.org/post", {
		method: "POST",
		headers: {
			"Content-type": "application/json",
		},
		body: JSON.stringify(jokeobj),
	});

	const response = await joke_response.json();
	console.log(response);
};

post_jokes(joke_obj);
