const share = document.getElementById("sharebutton");
const mob_close = document.getElementById("shareclose");
const hover = document.getElementById("sharehover");

share.addEventListener("click", () => {
	hover.classList.toggle("opacity-100");
});

mob_close.addEventListener("click", () => {
	hover.classList.toggle("opacity-100");
});
