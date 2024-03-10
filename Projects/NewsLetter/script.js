function validateEmail(email) {
	var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return re.test(email);
}

document
	.getElementById("newsletterForm")
	.addEventListener("submit", function (event) {
		event.preventDefault();

		var emailInput = document.getElementById("email");
		var errorMsg = document.getElementById("Error-Container");
		var email = emailInput.value;

		if (validateEmail(email)) {
			window.location.href =
				"https://satyamvyas04.github.io/LearningFrontEnd/Projects/NewsLetter/success.html?email=" +
				encodeURIComponent(email);
		} else {
			emailInput.focus();
			emailInput.classList.add("ErrorState");
			errorMsg.classList.remove("hidden");
		}
	});
