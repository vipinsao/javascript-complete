(function add(a, b) {
  console.log(a + b);
})(2, 4);

(function say() {
  console.log("Hey");
})();

//new version of javaScript ES6
(() => console.log("I am an IIFE"))();

//much more readable
//much more cleaner
// const data = (async () => await fetch())();

//see the IIFE function example of ATM in MDN
const atm = function (initalBalance) {
  //this is private variable
  let balance = initalBalance;
  function withdaw(amt) {
    if (amt > balance) {
      return "Insufficient funds";
    } else {
      balance -= amt;
      return balance;
    }
  }
  return { withdaw };
};

const myATM = atm(1000);
console.log(myATM.withdaw(100)); // 800
