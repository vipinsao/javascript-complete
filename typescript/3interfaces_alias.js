"use strict";
//Interfaces and Type Aliases
//>Defining interfaces
//>Using interfaces to define object shapes
//>Extending interfaces
//>Type aliases
//>Intersection types
function getDataOfUser(obj) {
    obj.email;
    obj.name;
    obj.password;
}
getDataOfUser({
    email: "vipin@gmail.com",
    name: "vipin sao",
    password: "123456",
    gender: "male",
});
function study(obj) {
    //we are getting both propties
    //because we did Teacher
    obj.email;
    obj.teach;
}
function Test(obj) {
    //got both the values because they are merged
    obj.name;
    obj.surname;
}
let a2;
////Intersection and Union
//this one is union example
let help;
function ABCD(a) {
    a.email;
    a.getDetails;
    a.name;
}
