"use strict";
//Classes and Objects
//.Class definition
//.Constructiors
//.Access modifiers (public, private, protected)
//.Readonly properties
//.Optional properties
//.Parameter properties
//.Getters and setters
//.Static members
//.Abstract classes and methods
//creating class---------->>>>>>
class Device {
    constructor() {
        this.name = "lg";
        this.price = 12000;
        this.category = "digital";
    }
}
//created instance of class
let d1 = new Device();
let d2 = new Device();
//Creating class with constructor---------->>>>>>
//we can set values using contructor
class BottleMaker {
    //In ts directly cant create variable so
    //have to use public then we can create variable
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
let b1 = new BottleMaker("Milton", 1200);
//Access Modifier ------ >>>>>>>>>>>>>
//Typescript will warn us that private and protected
//cant be changed but it will changed if we ignore
//this warnings
class Learn {
    //   constructor(public language: string) {}
    constructor(language) {
        this.language = language;
    }
}
//Private can be changed inside the within class
//Protected can be changed only within and extended class
let pro = new Learn("javascript");
//private change example
class Private {
    constructor(name) {
        this.name = name;
    }
    changeName() {
        this.name = "lalu";
    }
}
let instance1 = new Private("Laghu");
instance1.changeName(); //it will change name
//using inside method which we had defined
//Read only property
//access_modifier readonly "always remember syntax"
class ReadOnly {
    constructor(name) {
        this.name = name;
    }
}
let read = new ReadOnly("ledu");
//Optional Properties
class Optional {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
let opt1 = new Optional("sao", 24, "male");
let opt2 = new Optional("sao", 24); //gender optional
//Parameter Properties
class Parameter {
    //this are parameter properties
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
//Getter and Setters
class GetterAndSetter {
    constructor(_name, age) {
        this._name = _name;
        this.age = age;
    }
    //Old way but Typescript provides better way
    //   getName() {
    //     return this.name;
    //   }
    //   setName(value: string) {
    //     this.name = value;
    //   }
    //new way better way
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
}
let get = new GetterAndSetter("sao", 24);
let set = new GetterAndSetter("alex", 24);
// get.setName("vipin"); //name changed bro
set.name = "vipin";
console.log(get.name);
//Static Member
//Accessiable without creating instance
class Static {
}
Static.version = 10;
//its running because its static
Static.version;
//Abstract Classes & methods---------->>>>>>>>>>
class Abstract {
    constructor(amount, account) {
        this.amount = amount;
        this.account = account;
    }
    isValidAmount(amount) {
        return this.amount > 0;
    }
}
//this will inhert the Abstract class
class Paytm extends Abstract {
}
