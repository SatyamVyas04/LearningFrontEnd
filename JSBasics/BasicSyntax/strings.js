// String Methods
// charAt()
// charCodeAt()
// concat()
// fromCharCode()
// indexOf()
// lastIndexOf()
// match()
// replace()
// search()
// slice()
// split()
// substr()
// substring()
// toLowerCase()
// toUpperCase()
// valueOf()

const string = 'Satyam Vyas Hehe  ';
console.log(string.charAt(0));
console.log(string.charCodeAt(0));
console.log(string.concat("Test"));
console.log(String.fromCharCode(65));
console.log(string.indexOf('a'));
console.log(string.lastIndexOf('a'));
console.log(string.match(/[A-Z]/g));
console.log(string.replace('a', '_'));
console.log(string.search("H"));
console.log(string.split('m'));
console.log(string.slice(7));
console.log(string.slice(-5));
console.log(string.slice(0, 6));
console.log(string.substring(0, 4));
console.log(string.substring(7));
console.log(string.toLowerCase());
console.log(string.toUpperCase());
console.log(`${string.length} + ${string.trim().length}`);
