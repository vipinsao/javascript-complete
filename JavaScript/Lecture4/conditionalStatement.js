//conditional statement
let age = 20;
//if statement
if (age >= 18) {
  console.log("You are an adult.");
}
//if-else statement
if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are not an adult.");
}
//if-else if-else statement
if (age < 13) {
  console.log("You are a child.");
} else if (age < 18) {
  console.log("You are a teenager.");
} else if (age < 65) {
  console.log("You are an adult.");
} else {
  console.log("You are a senior citizen.");
}

//switch statement
let day = 3; // 1 for Monday, 2 for Tuesday, ..., 7 for Sunday
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day");
}

//break is used to exit the switch statement
//continue is used to skip the current iteration in loops

//ternary operator
let isAdult = age >= 18 ? "You are an adult." : "You are not an adult.";
console.log(isAdult);
//Note: Ternary operator is a shorthand for if-else statement
