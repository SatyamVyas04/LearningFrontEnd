const myObj = {
    name: "Satyam", 
    age: 19, 
    hello: function(){
        console.log("Hello");
    }
};

console.table(myObj);

const sendJSON = JSON.stringify(myObj);
console.table(sendJSON);
console.log(typeof(sendJSON));
// console.log(sendJSON.name); // Undef

const receiveJSON = JSON.parse(sendJSON);
console.table(receiveJSON);
console.log(typeof(receiveJSON));
// Functions are lost when Stringfy'ed and Parse'd