//currying

//Currying is a functional programming technique where a function with multiple arguments is transformed into a sequence of functions, each taking a single argument. This allows for partial application of functions and can lead to more reusable and composable code.
// Example of currying in JavaScript
// function add(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }
const add = (a) => (b) => (c) => a + b + c;
console.log(add(1)(2)(3)); // 6

//this is in older version of JavaScript
// function sendAutoMail(to) {
//   return function (subject) {
//     return function (message) {
//       console.log(
//         `Sending mail to ${to}\nSubject: ${subject}.\nMessage: ${message}.`
//       );
//     };
//   };
// }

//this is in newer version of JavaScript
const sendAutoMail = (to) => (subject) => (message) => {
  `Sending mail to ${to}\nSubject: ${subject}.\nMessage: ${message}.`;
};

let step1 = sendAutoMail("vipinsao@gmail.com");
let step2 = step1("Regarding Applying for a job");
step2(
  "I am interested in applying for a job at your company. Please let me know if you have any openings available."
);
