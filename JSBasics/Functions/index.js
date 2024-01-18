import { posts } from "./posts.js";

posts.forEach((post) => {
	console.log(post.id);
});
console.clear();

const filter_posts = posts.filter((post) => {
	return post.userId == 1;
});
console.log(filter_posts);

const mapped_posts = filter_posts.map((post) => {
	return post.id * 10;
});
console.log(mapped_posts);

const reduced_posts = mapped_posts.reduce((sum, post) => {
	return sum + post;
});
console.log(reduced_posts);
