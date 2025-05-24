//Higher order functions - A function that takes a function
//as an argument or returns a function as a result is called a higher-order function.

//the add is higher order function
function add(a, b, cb) {
  let result = a + b;
  cb(result);
}

add(2, 4, function () {
  console.log(value);
});

add(10, 30, (val) => console.log(val));
//Note callback function -> A function that is passed as an argument to another function
//and is executed after the completion of that function.

//this is a higher order function which returns a function
function counter() {
  let count = 0;
  return function () {
    count++;
  };
}

let count1 = counter();
console.log(count1()); // 1
console.log(count1()); // 2
let count2 = counter();
console.log(count2()); // 1
console.log(count1()); // 3
