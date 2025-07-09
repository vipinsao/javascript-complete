//Type Assersion/Casting

//type assertion ka matlab batana ts ko ki particular cheej ka type kya hai

let z: any = 12;

z as number;

//Non-null assertion opertor
let love: null | undefined | string;
love = "hey";
//when use ! then its gurantee that
//love will not be null or undefined thats
//100% sure
love!;
