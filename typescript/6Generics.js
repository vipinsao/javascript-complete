"use strict";
//Generics
// Generic functions
// Generic interfaces
// Generic classes
//Hum ek function banayenge jo ki koi bhi value
//accept karega
// function logger(a: string) {}
// logger("hey");
//Generic Function
// T - template function
function Generic(a) { }
Generic("hell");
Generic(3);
function add(a, b, c) { }
add("halwa", "ledu", 4);
function log(val) {
    console.log(val);
}
//we can even send without defining the type
//typescript automatic judges its types
log("hey");
log(10);
function ledu1(obj) { }
function ledu2(obj) { }
ledu1({ name: "foo", age: 25, key: "hahahaa" });
ledu2({ name: "foo", age: 25, key: 10 });
//Generic Classes ------------->>>>>>>>>>>>>>
class GenericClass {
    constructor(key) {
        this.key = key;
    }
}
let bay1 = new GenericClass("hey");
let bay2 = new GenericClass(10);
let bay3 = new GenericClass(true);
//IMPORTANT--------->>>>>>>>>>>>>>>>>>>>>>>>>>
//One catch in Generic function Please Understand
//When we are returning the string type
//its giving us error
//But we clearly defined that T -  string
// function Catch<T>(a: T, b: T): T {
//   return "hey";  Catch
//   return "hey" as T; its solution
//   return "hey"<T>;  its solution
//   return a;   true
// }
// Catch<string>("hey", "hello");
