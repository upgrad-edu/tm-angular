//Enacpsulation
class RoleName {
    private role: string;
    constructor(role: string) 
        { 
           this.role = role;    
        }    
    }
   
//new RoleType("Admin").roleType; //Will throw an error



//Inhertitance 
class CarDetails{
    protected carName: string;
    public fuelType: string;
    public pricePerHour: number;
    constructor(carName: string, fuelType: string) {
        this.carName = carName;
        this.fuelType = fuelType;
        console.log(`The name of the car is ${carName} has fuel type as ${fuelType}.`);
    }
    costPerHour(pricePerHour = 100) {
        console.log(`The cost per hour is ${pricePerHour}.`);
    }

}

class Sedan extends CarDetails {
    constructor(carName: string,fuelType: string) {
        super(carName, fuelType);
    }
    totalAmount(numberOfHours: number) {
        return numberOfHours*this.pricePerHour;
    }
    costPerHour(pricePerHour = 300){
        super.costPerHour(pricePerHour);
    }
}


let swiftDesire = new Sedan("Swift Desire", "Diesel");
//console.log(swiftDesire.carName); // Will throw an error
console.log(swiftDesire.fuelType); //Will run successfully

//Abstraction
abstract class Vehicle {
    public vehicleType: string;
    public fuel:string;
    constructor(vehicleType: string) {
        this.vehicleType = vehicleType;
        console.log(`The type of the vehile is ${vehicleType}`);
    }
    
    abstract fuelType(): void;    
    
}
    
class Car extends Vehicle {
    constructor() {
        super("car");
    }
    fuelType() {
        console.log(`The fuel type of the car is Diesel`);
    }
    carMilega(mileage:number){
        console.log(`The mileage of the car is ${mileage}`)
    }
}

class Bike extends Vehicle {
    constructor() {
        super("bike");
    }
    fuelType(): void {
        console.log("The fuel type of the bike is petrol");
    }
    bikeMilega(mileage:string){
        console.log(`The mileage of the bike is ${mileage}`)
    }
}

let yamahaVector = new Bike();
console.log(yamahaVector.bikeMilega("i5kmph"));

