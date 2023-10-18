const myObj = {
	name: "Satyam",
	class: "Comps",
	section: "B",
	age: 19,
    tech_head: true,
    gpa: 8.91,
	interests: ["Coding", "Coffee", "Music"],
    subjects: {
        dsgt: 'fav',
        coa: 'nah', 
        ps: 'okayish',
        dbms: 'fav',
        ds: 'okayish'
    },
    action: function (){
        return `Time for some ${this.interests[0]}`
    }
};

console.log(myObj.name);
console.log(myObj.age);
console.log(myObj.subjects);
console.log(myObj.interests);
console.log(myObj.gpa);
console.log(myObj.action());