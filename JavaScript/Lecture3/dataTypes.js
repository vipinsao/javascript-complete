//datatypes in javascript
// 1. Number
let num = 10;
// 2. String
//we can use "" or ' ' to define a string
//we can also use backticks ` ` to define a string
let str = "Hello, World!1234";
// 3. Boolean
let isTrue = true;
// 4. Undefined
let notDefined;
// 5. Null
let emptyValue = null;
// 6. Object
let obj = {
  name: "John",
  age: 30,
};
//accessing object properties
console.log(obj.name); // John
console.log(obj.age); // 30

//7. Array
let arr = [1, 2, 3, 4, 5];
console.log(arr); // [1, 2, 3, 4, 5]
console.log(arr[0]); // 1

//8. Function
//assignment of function to a variable
let func = function () {
  console.log("Hello, World!");
};
//calling the function
console.log(func()); // Hello, World!

//Note:
//string '1' + '1' = '11' string
//string + number = string
//string * num = number
console.log("a" * 1); // NaN wierd not a number
console.log("a" + 1); // a1 string

//Typeof operator
console.log(typeof 132); // number
console.log(typeof "Hello"); // string

//Note: null is an object
//Nan is a number
