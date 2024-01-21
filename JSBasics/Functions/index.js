// Fetch API Practise
// Workflow Function

const get_user_data = async () => {
	const user_data = await fetch("https://jsonplaceholder.typicode.com/users");
	const user_data_processed = await user_data.json();
	const user_email_array = user_data_processed.map((user) => {
		return user.email;
	});
	return user_email_array;
};

const print_user_email = async () => {
	const user_data = await get_user_data();
	user_data.forEach((email) => {
		console.log(email);
	});
};

print_user_email();

// OR

const post_user_data = async () => {
	const user_data = await fetch("https://jsonplaceholder.typicode.com/users");
	const user_data_processed = await user_data.json();
	const user_email_array = user_data_processed.map((user) => {
		return user.email;
	});
	postingfn(user_email_array);
};

const postingfn = (data) => {
	data.forEach((email) => {
		console.log(email);
	});
};

post_user_data();
