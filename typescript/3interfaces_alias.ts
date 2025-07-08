//Interfaces and Type Aliases
//>Defining interfaces
//>Using interfaces to define object shapes
//>Extending interfaces
//>Type aliases
//>Intersection types

//Interface------->VERY IMPORTANT
//we created interface so that typescript can know
//what kind of values the obj can have
//Interface <-> face(shakal)
interface User {
  name: string;
  email: string;
  password: string;
  //gender ?  "?" means optional does not matter
  //is passed or not
  gender?: string;
}

function getDataOfUser(obj: User) {
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

//Extending Interface------->>>>>>>>> Important
//creating two interface and second interface
//will inherit the User interface

interface Student {
  name: string;
  email: string;
  password: string;
}

interface Teacher extends Student {
  teach: boolean;
}

function study(obj: Teacher) {
  //we are getting both propties
  //because we did Teacher
  obj.email;
  obj.teach;
}

//One Confusing Concept---------->>>>>>>>>
//two interface merge if same name
interface hello {
  name: string;
}
interface hello {
  surname: string;
}

function Test(obj: hello) {
  //got both the values because they are merged
  obj.name;
  obj.surname;
}

////Type Alias--------->>>>>>>>>>>>>>>>

type sao = number | string | null;

let a2: sao;
