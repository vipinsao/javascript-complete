//Generics
// Generic functions
// Generic interfaces
// Generic classes

//Hum ek function banayenge jo ki koi bhi value
//accept karega

// function logger(a: string) {}

// logger("hey");

//Generic Function
// T - template function
function Generic<T>(a: T) {}

Generic<string>("hell");
Generic<number>(3);

function add<T>(a: T, b: string, c: number) {}
add<string>("halwa", "ledu", 4);

function log<T>(val: T) {
  console.log(val);
}
//we can even send without defining the type
//typescript automatic judges its types
log("hey");
log(10);

//Generic Interface --------------->>>>>>>>>>
interface Halwa<T> {
  name: string;
  age: number;
  key: T;
}

function ledu1(obj: Halwa<string>) {}
function ledu2(obj: Halwa<number>) {}

ledu1({ name: "foo", age: 25, key: "hahahaa" });

ledu2({ name: "foo", age: 25, key: 10 });

//Generic Classes ------------->>>>>>>>>>>>>>
class GenericClass<T> {
  constructor(public key: T) {}
}

let bay1 = new GenericClass<string>("hey");
let bay2 = new GenericClass<number>(10);
let bay3 = new GenericClass(true);

//IMPORTANT--------->>>>>>>>>>>>>>>>>>>>>>>>>>
//One catch in Generic function Please Understand
//When we are returning the string type
//its giving us error
//But we clearly defined that T -  string
// function Catch<T>(a: T, b: T): T {
//   return "hey";  Catch
//   return "hey" as T; its solution
//   return "hey"<T>;  its solution
//   return a;   true
// }

// Catch<string>("hey", "hello");
