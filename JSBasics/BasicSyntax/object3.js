const GreenDay = {
	vocals: "Billie Joe Armstrong",
	guitar: "Jason White",
	drums: "Tre Cool",
	keyboard: "Jason Freese",
	bass: "Mike Dirnt",
};

// console.log(Object.keys(GreenDay));
// console.log(Object.values(GreenDay));

for (let job in GreenDay) {
	console.log(job.toUpperCase() + ": " + GreenDay[job]);
}

// Taking values out
const { guitar: myVar , bass: myVar2} = GreenDay;
console.log(myVar + " <> " + myVar2);

// or 

const {guitar, bass} = GreenDay;
console.log(guitar + " < > " + bass);
