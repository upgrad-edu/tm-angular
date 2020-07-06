//Generic type variables
function checkPasswordLength<T>(password: T) {
    console.log(password.length);
}

//Generic types
function testArray<T>(item: Array<T>) {
    return item;
}
let furits = testArray<string>(["Apples"]);
furits.push(100);

//Generic classes
class stack<T>{
    constructor(public item: Array<T>) {
        }    
}
let vegetable = new stack<string>(["Lemons"]);
vegetable.item.push(100);

//Generic constraints
class houeholdItems{
    constructor(public nameOfItem: string) {       
    }     
}

function cleaners<T extends houeholdItems>(c:T) {
    console.log(c.nameOfItem);
    }

let floorCleaner = new houeholdItems("Harpic");
cleaners(floorCleaner);
cleaners(100);
