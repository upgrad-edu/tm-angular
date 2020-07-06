export interface Address {
    apartment: number;
    street: string;
    city: string;
    state: string;
    pin: number;
}

let firstName: string = "John";
let lastName: string = "Doe";
let age: number = 22;
let address: Address = {
    apartment: 101,
    street: "Fort Street",
    city: "Mumbai",
    pin: 400001,
    state: "Maharashtra",
};

const getAddress = (address:  Address): Address => {
    const addressString = `Apartment: ${address.apartment}, Street:  ${address.street}, City: ${address.city}, PIN: ${address.pin}, State: ${address.state}`;
    return address;
}

const updateAddress = (address:  Address): Address => {
    address.street = address.street.toUpperCase() === 'FORT STREET' ? 'Kings Street' : address.street;
    return address;
}

getAddress(address);
updateAddress(address);