// Array Methods
// concat()
// indexOf()
// join()
// lastIndexOf()
// pop()
// push()
// reverse()
// shift()
// slice()
// sort()
// splice()
// toString()
// unshift()

const arr = ["1", 2, 'three', true, 1.5, 10];
console.log(arr);

arr[0] = 'Satyam';
console.log(arr);
console.log(arr.length);
console.log(arr[3]);

let returnValue = arr.push("Hello");;
console.log(returnValue); // New Length
console.log(arr); 

returnValue = arr.pop();
console.log(returnValue); // Popped Value
console.log(arr);

returnValue = arr.unshift("Hello");
console.log(returnValue); // New Length
console.log(arr);

returnValue = arr.shift();
console.log(returnValue); // Removed Value
console.log(arr);

returnValue = arr.splice(1, 3);
console.log(returnValue); // Removed Portion
console.log(arr);

returnValue = arr.splice(1, 3, 'Satyam', 'Vyas', '10');
console.log(returnValue); // Replaced Portion
console.log(arr);

returnValue = arr.splice(1, 0, ...returnValue); // ... == Spread Operator
console.log(returnValue); // Nothing returned with inserted
console.log(arr);

const newarr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
console.log(newarr.slice(2));
console.log(newarr.slice(2, 5));

newarr.reverse();
console.log(newarr);

let str = newarr.join();
console.log(str);
str = newarr.join(' ');
console.log(str);

let final = arr.concat(newarr);
console.log(final);

final = newarr.concat(arr);
console.log(final);

final = [...newarr, ...arr];
console.log(final);

final = [newarr, arr];
console.log(final);

console.log(final[0][7].toUpperCase() + ' & ' + final[1][4]); // 2D Array Traversal
