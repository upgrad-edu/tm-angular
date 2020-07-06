"use strict";
exports.__esModule = true;
var firstName = "John";
var lasttName = "Doe";
var age = 22;
var address = {
    apartment: 101,
    street: "Fort Street",
    city: "Mumbai",
    pin: 400001,
    state: "Maharashtra"
};
var getAddress = function (address) {
    var addressString = "Apartment: " + address.apartment + ", Street:  " + address.street + ", City: " + address.city + ", PIN: " + address.pin + ", State: " + address.state;
    return address;
};
var updateAddress = function (address) {
    address.street = address.street.toUpperCase() === 'FORT STREET' ? 'Kings Street' : address.street;
    console.log(address);
    return address;
};
getAddress(address);
updateAddress(address);
