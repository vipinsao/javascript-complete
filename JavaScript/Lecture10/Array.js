//Array is a collection of items
const students = ["sao", "vipin", "alex"];

console.log(students.length); // 3
console.log(students[0]); // sao
console.log(students[1]); // vipin
students.push("tanjiro"); //added at the end
console.log(students); // ["sao", "vipin", "alex", "tanjiro"]
students[0] = "SAO"; //replaced first element

//In javaScript arrays can have any type of data
const mixedArray = [
  1,
  "sao",
  true,
  null,
  undefined,
  { name: "vipin" },
  [1, 2, 3],
];
console.log(mixedArray);

console.log(mixedArray.indexOf("sao")); // 1
console.log(mixedArray.indexOf("tanjiro")); // -1 (not found)

mixedArray.pop(); // removes the last element
