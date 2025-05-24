//Arrow functions
// Arrow functions are a more concise way to write function expressions in JavaScript.
// They are often used for short functions and can make the code cleaner and more readable.
// Arrow functions do not have their own 'this' context, which can be useful in certain situations.
// Arrow functions are defined using the arrow syntax (=>) and can be used in place of regular function expressions.
// Arrow function syntax
const sayHello = () => {
  console.log("Hii Vipin!");
};

const add = (a, b) => {
  return a + b;
};

//Note if there is one line of code in the function body, you can omit the curly braces and the return statement.
const addOneLine = (a, b) => a + b;

console.log(add(10, 20)); // Output: 30
console.log(addOneLine(10, 20)); // Output: 30

//argument keyword is not used in arrow functions
//instead we can use (...args) rest parameter syntax

//Hoisting cant be used
//Arrow function can not be hoisted that mean we have to initialize
//the arrow function before using it

//Note- this keyword
//this refers to the window object in the global scope in arrow functions.
const obj = {
  value: 20,
  myfunv: function () {
    //this refers to the object obj
    //its means the context of this is the object obj
    console.log("value is: " + this.value);
  },
};
