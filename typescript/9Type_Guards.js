"use strict";
//Type Guards and Typescript Utility Types
//Using typeof and instanceof
//Partial, Required, Readonly
//type guard -> type narrowing
//using typeof or instanceof
function TypeGuards(args) {
    if (typeof args === "number") {
        return "number";
    }
    else if (typeof args === "string") {
        return "string";
    }
    else {
        throw new Error("Carzy");
    }
}
console.log(TypeGuards(12));
TypeGuards("hello");
//Using instance of when there is classes
class TvRemote {
    switchTvOff() {
        console.log("OFF");
    }
}
class CarRemote {
    switchCarOff() {
        console.log("Switch OFF");
    }
}
const tv = new TvRemote();
const car = new CarRemote();
function SwitchOffKaro(device) {
    if (device instanceof TvRemote) {
        device.switchTvOff();
    }
    else if (device instanceof CarRemote) {
        device.switchCarOff();
    }
}
// SwitchOffKaro();
