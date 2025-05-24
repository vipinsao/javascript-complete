//Logical Operator
//Logical AND
const a = 20;
const gender = "male";
//in && all the conditions should be true
if (a == 20 && gender == "male") {
  console.log("Welcome to the party");
}
//in || any one condition should be true
else if (a <= 18 || gender == "male") {
  console.log("you are male and you are lion my friend");
}
//in ! the condition will be false if the condition is true and vice versa
else if (a !== 20) {
  console.log("you are not 20");
}
