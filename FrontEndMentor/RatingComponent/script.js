const thanks = document.getElementsByClassName("thanks")[0];
const home = document.getElementsByClassName("feedback")[0];
const submit = document.getElementsByClassName("submit")[0];
const ratings = document.getElementsByClassName("input");
const labels = document.querySelectorAll("label");
const confirm = document.querySelector(".confirmation");
console.log(confirm.textContent);

for (let i = 0; i < ratings.length; i++) {
	let rating = ratings[i];
	rating.addEventListener("click", (e) => {
		rating.classList.add("ans");
	});
}

submit.addEventListener(
	"click",
	(e) => {
		let ans = 0;
		for (let i = 0; i < ratings.length; i++) {
			let rating = ratings[i];
			if (rating.classList.contains("ans")) {
				ans = labels[i].textContent;
			}
		}
		thanks.classList.remove("hidden");
		home.classList.add("hidden");
		confirm.textContent = `You selected ${ans} out of 5`;
		console.log(confirm.textContent);
	},
	false
);
