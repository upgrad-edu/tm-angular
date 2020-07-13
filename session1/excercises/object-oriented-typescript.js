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
var Department = /** @class */ (function () {
    function Department(name, vertical, numberOfEmployees, floorNumber) {
        this.name = name;
        this.vertical = vertical;
        this.numberOfEmployees = numberOfEmployees;
        this.floorNumber = floorNumber;
        console.log("The " + name + " belongs to the " + vertical + " has " + numberOfEmployees + " and is located on floor " + floorNumber);
    }
    return Department;
}());
var Tech = /** @class */ (function (_super) {
    __extends(Tech, _super);
    function Tech(name, vertical, numberOfEmployees, floorNumber) {
        return _super.call(this, name, vertical, numberOfEmployees, floorNumber) || this;
    }
    Tech.prototype.numberOfTables = function () {
        return this.numberOfEmployees / 5;
    };
    return Tech;
}(Department));
var backend = new Tech("Technology Services", "Tech", 50, 10);
console.log(backend.numberOfTables());
