"use strict";
//Functions
// Function Types
// Optional and default parameters
// Rest parameters
// Overloads
function hell() {
    return "hello";
}
//passing the call back function in this function
function FuncType(name, age, cb) {
    cb("hey");
}
FuncType("sao", 25, (args) => {
    console.log(args);
});
//We are practing Optional parameter
function OptionalFunc(name, age, gender) {
    console.log(name, age, gender);
}
OptionalFunc("vipin", 24, "male");
OptionalFunc("Nunu", 30);
//Rest/Spread Parameter
function RestParameter(...args) { }
RestParameter(1, 2, 3, 4, 5, 6);
//single function implementation
function OverLoad(a, b) {
    if (typeof b === "number") {
        // Case: OverLoad("Gojo", 5)
        console.log(`String: ${a}, Number: ${b}`);
        return b * 2;
    }
    else {
        // Case: OverLoad("Gojo")
        console.log(`String only: ${a}`);
    }
}
// Usage
OverLoad("Gojo"); // Output: String only: Gojo
let result = OverLoad("Gojo", 5); // Output: String: Gojo, Number: 5
console.log(result); // Output: 10
