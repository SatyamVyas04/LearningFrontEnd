let data = [
	{
		category: "Reaction",
		score: 80,
		icon: "images/icon-reaction.svg",
	},
	{
		category: "Memory",
		score: 92,
		icon: "images/icon-memory.svg",
	},
	{
		category: "Verbal",
		score: 61,
		icon: "images/icon-verbal.svg",
	},
	{
		category: "Visual",
		score: 72,
		icon: "images/icon-visual.svg",
	},
];

const categories = document.getElementsByClassName("category");

for (let i = 0; i < categories.length; i++) {
	const logoname = categories
		.item(i)
		.getElementsByClassName("logoname")
		.item(0);
	logoname.innerHTML = `<img src="${data[i].icon}" alt="icon" />
    <h4 class="name">${data[i].category}</h4>`;

	const marks = categories.item(i).getElementsByClassName("score").item(0);
	marks.innerHTML = data[i].score;
}
