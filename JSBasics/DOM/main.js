// DOM Manipulation
// Selecting HTML elements from Document
const view1 = document.getElementById("view1");
console.log(view1);
const view2 = document.querySelector("#view2");
console.log(view2);

// Changing CSS
view1.style.display = "flex";
view2.style.display = "none";

// Class and All Selectors
const views = document.getElementsByClassName("view");
console.log(views); //HTML COLLECTION: live
const sameViews = document.querySelectorAll(".view");
console.log(sameViews); //NODELIST: static

// Co-relation with CSS
const divs = view1.querySelectorAll("div");
console.log(divs);
const divs2 = view1.getElementsByTagName("div");
console.log(divs2);
const evenDivs = view1.querySelectorAll("div:nth-of-type(2n)");
console.log(evenDivs);
for (i = 0; i < evenDivs.length; i++) {
	evenDivs[i].style.backgroundColor = "#000";
}

// Getting Specific with Selectors
const navText = document.querySelector("nav h1");
console.log(navText.textContent);
const nav = document.querySelector("nav");
nav.innerHTML = "<h1>Left</h1> <p>Right</p>";
nav.style.color = "Aqua";

// Parent and Child containers
console.log(evenDivs[0].parentElement);
console.log(evenDivs[0].parentElement.children);
console.log(evenDivs[0].parentElement.children);
console.log(evenDivs[0].parentElement.childElementCount);
console.log(evenDivs[0].parentElement.lastElementChild);
console.log(evenDivs[0].parentElement.lastChild);
console.log(evenDivs[0].parentElement.firstElementChild);
console.log(evenDivs[0].parentElement.firstChild);
console.log(evenDivs[0].nextElementSibling);
