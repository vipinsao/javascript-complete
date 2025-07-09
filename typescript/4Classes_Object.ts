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
  name = "lg";
  price = 12000;
  category = "digital";
}
//created instance of class
let d1 = new Device();
let d2 = new Device();

//Creating class with constructor---------->>>>>>
//we can set values using contructor
class BottleMaker {
  //In ts directly cant create variable so
  //have to use public then we can create variable
  constructor(public name: string, public price: number) {}
}

let b1 = new BottleMaker("Milton", 1200);

//Access Modifier ------ >>>>>>>>>>>>>
//Typescript will warn us that private and protected
//cant be changed but it will changed if we ignore
//this warnings
class Learn {
  //   constructor(public language: string) {}
  constructor(private language: string) {}
}
//Private can be changed inside the within class
//Protected can be changed only within and extended class
let pro = new Learn("javascript");

//private change example
class Private {
  constructor(private name: string) {}
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
  constructor(public readonly name: string) {}
}

let read = new ReadOnly("ledu");

//Optional Properties
class Optional {
  constructor(
    public name: string,
    public age: number,
    public gender?: string
  ) {}
}
let opt1 = new Optional("sao", 24, "male");
let opt2 = new Optional("sao", 24); //gender optional

//Parameter Properties
class Parameter {
  //this are parameter properties
  constructor(public name: string, public age: number) {}
}

//Getter and Setters
class GetterAndSetter {
  constructor(public _name: string, public age: number) {}

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

  set name(value: string) {
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
  static version = 10;
}
//its running because its static
Static.version;

//Abstract Classes & methods---------->>>>>>>>>>
class Abstract {
  constructor(protected amount: number, protected account: number) {}
  isValidAmount(amount: number) {
    return this.amount > 0;
  }
}
//this will inhert the Abstract class
class Paytm extends Abstract {}
