const thanks = document.getElementsByClassName("thanks")[0];
const home = document.getElementsByClassName("feedback")[0];
const submit = document.getElementsByClassName("submit")[0];
const ratings = document.getElementsByClassName("input");
const labels = document.querySelectorAll("label");
const confirm = document.querySelector(".confirmation");
let ans = 0;

for (let i = 0; i < ratings.length; i++) {
	let rating = ratings[i];
	rating.addEventListener("click", (e) => {
		ans = labels[i].textContent;
	});
}

submit.addEventListener(
	"click",
	(e) => {
		thanks.classList.remove("hidden");
		home.classList.add("hidden");
		confirm.textContent = `You selected ${ans} out of 5`;
	},
	false
);
