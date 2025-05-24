//In this lecture we will learn about variables in JavaScript
//Variables are used to store data values
//In JavaScript, there are three ways to declare a variable
//1. var
//2. let <- After ES6 this keywords comes and mostly used
//3. const <-
// var is used to declare a variable that can be re-assigned
// let is used to declare a variable that can be re-assigned
// const is used to declare a variable that cannot be re-assigned

//But for now a days let and const is used frequently because var is not very safe

//variable naming rules study it by your own
//One thing for better readability is to use camelCase for variable names
//For example: firstName, lastName, fullName

//JavaScript is a dynamically typed language
//This means that you don't have to specify the data type of a variable when you declare it
//JavaScript will automatically determine the data type based on the value you assign to it
//we can assign any type of value to a variable
//the data type is assigned at runtime

var name = "John"; //string
name = "Learn"; // reassigned because its var

let age = 25; //number
age = 30; //reassigned because its let
age = "hello";

const pi = 3.14; //number
pi = 14; //cannot be reassigned because its const throws error

//var is global scoped - it can be accessed from anywhere in the code
//let and const are block scoped - they can only be accessed from within the block they are declared in

//for example
if (true) {
  var x = 10; //global scoped
  let y = 20; //block scoped
  const z = 30; //block scoped
  console.log(x); //10
  console.log(y); //20
  console.log(z); //30
}
//outside the block
console.log(x); //10
//console.log(y); //throws error because y is block scoped
//console.log(z); //throws error because z is block scoped
