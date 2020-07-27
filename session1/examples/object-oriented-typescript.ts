//Enacpsulation
class roleType {
    private roleName: string;
    constructor(roleName: string) 
    { 
      this.roleName = roleName
     }
}

new roleType("Tom").roleName; //Will throw an error


//Inhertitance and polymorphism
class carDetails{
    constructor(public carName: string, public fuelType: string, public pricePerHour: number) {
        console.log("The name of the car is " + carName + " with fule type as " + fuelType + " has a price per hour of "+pricePerHour);
    }
}

class sedan extends carDetails {
constructor(carName: string,fuelType: string, pricePerHour: number) {
    super(carName, fuelType, pricePerHour);
}
}

let swiftDesire = new sedan("Swift Desire", "Diesel", 200);

//Abstraction
abstract class vehicle {
    constructor(vehicleType: string) {
        console.log("The type of the vehile is: " + vehicleType);
    }
}
    
class car extends vehicle {
    constructor() {
        super("car");
    }
}

class bike extends vehicle {
    constructor() {
        super("bike");
    }
}


let newBike = new bike();
console.log(newBike);

