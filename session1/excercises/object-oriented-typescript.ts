abstract class department {
    constructor(name: string, vertical: string, numberOfEmployees: number, floorNumber: number){
        console.log("The " +name + " belongs to the " +vertical+ " has "+numberOfEmployees+ " and is located on floor " +floorNumber);
    }
}

class tech extends department{
    constructor(name: string, vertical: string, numberOfEmployees: number, floorNumber: number){
        super(name, vertical, numberOfEmployees, floorNumber);
    }
}

let backend = new tech("Technology Services", "Tech", 50, 10)