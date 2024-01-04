btns = document.getElementsByClassName("btn-plus");

for (let i = 0; i < btns.length; i++) {
	btns[i].onclick = function () {
		expand_contract(btns[i]);
	};
}

function expand_contract(btn) {
	let id = btn.id;
	console.log(`dd${id.charAt(3)}`);
	let dd = document.getElementById(`dd${id.charAt(3)}`);
	console.log(dd);
	btn.classList.toggle("btn-minus");
	dd.classList.toggle("hidden");
}
