const students = ["sao", "vipin", "alex"];

students.forEach((student) => console.log(student));
// forEach is a higher-order function that takes a callback function
// It iterates over each element in the array and applies the callback function

//forEach syntax
// array.forEach((element, index, array) => {})
//forEach returns undefined

//map is a higher-order function that creates a new array by applying a function to each element of the original array
let newArr = students.map((val) => val + 1);
console.log(newArr); // ["sao1", "vipin1", "alex1"]

//example of map
const numbers = [1, 2, 3, 4, 5];

function double(n) {
  return n * 2;
}

let arr = numbers.map(double);
console.log(arr); // [2, 4, 6, 8, 10]

//find is used to find the first element in an array that satisfies a provided testing function
let ans = numbers.find((num) => num === 4);
console.log(ans);

//findIndex is used to find the index of the first element in an array that satisfies a provided testing function
let ansIndex = numbers.findIndex((num) => num === 4);
console.log(ansIndex); // 3

//filter is used to create a new array with all elements that pass the test implemented by the provided function
let filteredArr = numbers.filter((num) => num > 2);
console.log(filteredArr); // [3, 4, 5]
//filter syntax
// array.filter((element, index, array) => {})

//slice is used to return a shallow copy of a portion of an array into a new array object selected from start to end (end not included)
let slicedArr = numbers.slice(1, 4);
console.log(slicedArr); // [2, 3, 4]
//slice syntax
// array.slice(start, end)
//slice does not modify the original array

//splice is used to change the contents of an array by removing or replacing existing elements and/or adding new elements in place
let splicedArr = numbers.splice(1, 2, 10, 20);
console.log(splicedArr); // [2, 3]
console.log(numbers); // [1, 10, 20, 4, 5]
