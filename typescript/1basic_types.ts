//Basic Types
//>Primitive Types(number,string,boolean,etc)
//.Arrays
//.Enums
//.Any, Unknown, Void, Null, Undefined, Never

//primitives and reference

//Arrays----->>>
//we can have multiple types in this
let arr = [1, 2, "hello"];
//best typescript practice for declare certain type
let arr2: number[] = [1, 2];

//Tuple------->>>
//when we declare with fix size and tell what
//to insert in that particular space thats called
//Tuple
let tuple: [number, string] = [3, "DOB"];

//Enums(enumurations)---->>>>>
//we can select for this
//this is like predefined data
//we will chose from this
enum UserRoles {
  //always remember key = pair
  //always use '='
  ADMIN = "admin",
  GUEST = "guest",
  SUPER_ADMIN = "super_admin",
}
UserRoles.GUEST;

//ANY---->> we dont know what it will have?
//by default also set ANY when dont provide
//anything - BAD PRACTICE
let a: any;

//UnKnown---> firstly use any values
//but when you use that than please check the types
let b;
b = 1;
//kindly check with if(typeof b === number){}

//Void----> when function not returns anything
function hello(): void {
  console.log("hello");
}

//null----> when there is no value coming
let c = null;

//Undefined----> when we dont defined anything

//never---> It will never run dont usually use.
