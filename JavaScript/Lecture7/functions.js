//functions is a block of code that performs a specific task

//function declaration
function sayHello() {
  console.log("Hii Vipin!");
}

//function call
sayHello();

//a & b is parameters
function add(a = 2, b) {
  // a is default parameter
  // if we don't pass value for a, it will take default value 2
  return a + b;
}
//function call
let sum = add(5, 10); // 5 & 10 is arguments
console.log(sum); // 15

function multiply(a, b = 12) {
  return a * b;
}

let product = multiply(5, 10);
let prod = multiply(5);
console.log(product); // 50
console.log(prod); // 60

//any number of arguments can be passed to a function using the rest parameter syntax
// ...args is the rest parameter
function additions(...args) {
  //... is the spread operator
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }
  return sum;
}

let total = additions(1, 2, 3, 4, 5, 20);
console.log(total);
