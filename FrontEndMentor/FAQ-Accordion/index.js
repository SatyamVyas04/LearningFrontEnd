btns = document.getElementsByClassName("btn-plus");
let lastaccessedbtn = 0;
let lastaccesseddd = 0;

for (let i = 0; i < btns.length; i++) {
	btns[i].onclick = function () {
		expand_contract(btns[i]);
	};
}

function expand_contract(btn) {
	let id = btn.id;
	let dd = document.getElementById(`dd${id.charAt(3)}`);
	let active_btns = document.getElementsByClassName("btn-minus");

	if (active_btns.length > 0) {
		if (active_btns[0].id === id) {
		} else {
			let correspondingdd = document.getElementById(
				`dd${active_btns[0].id.charAt(3)}`
			);

			active_btns[0].classList.toggle("btn-minus");
			correspondingdd.classList.toggle("hidden");
		}
	}

	btn.classList.toggle("btn-minus");
	dd.classList.toggle("hidden");
}
