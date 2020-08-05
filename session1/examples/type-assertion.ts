let maybeBool: any = true;
let notBool: number = (<string>maybeBool).length;
console.log(notBool); //should be undefined

let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;
console.log(strLength);
