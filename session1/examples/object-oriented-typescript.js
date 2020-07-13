var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Enacpsulation
var RoleType = /** @class */ (function () {
    function RoleType(roleType) {
        this.roleType = roleType;
    }
    return RoleType;
}());
//new RoleType("Admin").roleType; //Will throw an error
//Inhertitance 
var CarDetails = /** @class */ (function () {
    function CarDetails(carName, fuelType) {
        this.carName = carName;
        this.fuelType = fuelType;
        console.log("The name of the car is " + carName + " has fuel type as " + fuelType + ".");
    }
    CarDetails.prototype.costPerHour = function (pricePerHour) {
        if (pricePerHour === void 0) { pricePerHour = 100; }
        console.log("The cost per hour is " + pricePerHour + ".");
    };
    return CarDetails;
}());
var Sedan = /** @class */ (function (_super) {
    __extends(Sedan, _super);
    function Sedan(carName, fuelType) {
        return _super.call(this, carName, fuelType) || this;
    }
    Sedan.prototype.totalAmount = function (numberOfHours) {
        return numberOfHours * this.pricePerHour;
    };
    Sedan.prototype.costPerHour = function (pricePerHour) {
        if (pricePerHour === void 0) { pricePerHour = 300; }
        _super.prototype.costPerHour.call(this, pricePerHour);
    };
    return Sedan;
}(CarDetails));
var swiftDesire = new Sedan("Swift Desire", "Diesel");
//console.log(swiftDesire.carName); // Will throw an error
console.log(swiftDesire.fuelType); //Will run successfully
//Abstraction
var Vehicle = /** @class */ (function () {
    function Vehicle(vehicleType) {
        this.vehicleType = vehicleType;
        console.log("The type of the vehile is " + vehicleType);
    }
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car() {
        return _super.call(this, "car") || this;
    }
    Car.prototype.fuelType = function () {
        console.log("The fuel type of the car is Diesel");
    };
    Car.prototype.carMilega = function (mileage) {
        console.log("The mileage of the car is " + mileage);
    };
    return Car;
}(Vehicle));
var Bike = /** @class */ (function (_super) {
    __extends(Bike, _super);
    function Bike() {
        return _super.call(this, "bike") || this;
    }
    Bike.prototype.fuelType = function () {
        console.log("The fuel type of the bike is petrol");
    };
    Bike.prototype.bikeMilega = function (mileage) {
        console.log("The mileage of the bike is " + mileage);
    };
    return Bike;
}(Vehicle));
var yamahaVector = new Bike();
console.log(yamahaVector.bikeMilega("i5kmph"));
