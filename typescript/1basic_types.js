"use strict";
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
let arr2 = [1, 2];
//Tuple------->>>
//when we declare with fix size and tell what
//to insert in that particular space thats called
//Tuple
let tuple = [3, "DOB"];
//Enums(enumurations)---->>>>>
//we can select for this
//this is like predefined data
//we will chose from this
var UserRoles;
(function (UserRoles) {
    //always remember key = pair
    //always use '='
    UserRoles["ADMIN"] = "admin";
    UserRoles["GUEST"] = "guest";
    UserRoles["SUPER_ADMIN"] = "super_admin";
})(UserRoles || (UserRoles = {}));
UserRoles.GUEST;
//ANY---->> we dont know what it will have?
//by default also set ANY when dont provide
//anything - BAD PRACTICE
let a;
//UnKnown---> firstly use any values
//but when you use that than please check the types
let b;
b = 1;
//kindly check with if(typeof b === number){}
//Void----> when function not returns anything
function hello() {
    console.log("hello");
}
//null----> when there is no value coming
let c = null;
//Undefined----> when we dont defined anything
//never---> It will never run dont usually use.
