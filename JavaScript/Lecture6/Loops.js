//Loops for doing same thing multiple times
// For loop in this you know how many times you want to run the loop
for (let i = 0; i < 5; i++) {
  console.log("Hello World", i);
}

// While loop in this you don't know how many times you want to run the loop
let j = 0;
let times = 5;
while (j < times) {
  console.log("Hello World", j);
  j++;
}

// Do while loop in this you don't know how many times you want to run the loop
let k = 0;
let times2 = 5;
do {
  console.log("Hello World", k);
  k++;
} while (k < times2);
//the do while loop will run at least once even if the condition is false
