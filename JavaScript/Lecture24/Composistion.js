function add(a, b) {
  return a + b;
}

function multiply(...args) {
  return args[0] * args[1];
}

function square(val) {
  return val * val;
}

//older version of javaScript
// function composeTwoFunction(fn1, fn2) {
//   return function (a, b) {
//     return fn2(fn1(a, b));
//   };
// }

//latest version of javaScript
const c2f = (fn1, fn2) => (a, b) => fn2(fn1(a, b));

// const task = composeTwoFunction(multiply, square);

//unlimited composition
//older version of javaScript
function compose(...fns) {
  return function (...values) {
    fns.reduceRight((a, b) => b(a), values);
  };
}

const composeAll =
  (...fns) =>
  (...val) =>
    fns.reduce((a, b) => b(a), val);
const task = composeAll(add, multiply);

console.log(task(2, 3)); // 25
