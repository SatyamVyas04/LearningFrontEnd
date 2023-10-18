const vehicle = {
    wheels: 4, 
    engine: function(){
        return "VRoooooooM!";
    }
}

// Inheritance
const bugatti = Object.create(vehicle);
bugatti.doors = 2;
console.log(bugatti);
console.log(bugatti.doors);
console.log(bugatti.wheels);
console.log(bugatti.engine());

// OverRiding Methods
const alto = Object.create(vehicle);
alto.doors = 4;
alto.engine = function(){
    return 'phAtPHATpHat';
};
console.log(alto);
console.log(alto.doors);
console.log(alto.wheels);
console.log(alto.engine());