"use strict";
//basic daatetypes
let isOkay = false;
let firstName = "Raphael";
let age = 30;
let hobbies = ["soccer", "gaming", "music"];
let details = [false, "Raphael", 30];
let any = "soccer";
//creating and calling a function
function greet(name) {
    return `Hello, ${name}!`;
}
const userName = "TypeScript User";
console.log(greet(userName));
function add(a, b) {
    return a + b;
}
console.log(add(5, 10));
function getCarDetails(car) {
    console.log(`Car Name: ${car.name} Car Year: ${car.year} Horsepower: ${car.horsepower} Is Electric: ${car.isElectric}`);
}
getCarDetails({ name: "Mecercedes Benz", year: 2024, horsepower: 360, isElectric: false });
function createPerson(person) {
    console.log(` ${person.firstName} ${person.lastName} is ${person.age} years old.${person.greet()} ${person.gender}`);
}
let stephen = {
    firstName: "Stephen",
    lastName: "Oloo",
    age: 23,
    greet: function () {
        return `Hello, my name is ${this.firstName} ${this.lastName}`;
    },
};
//calling the function
createPerson(stephen);
function createEmployee(employee) {
    console.log(` ${employee.firstName} ${employee.lastName} is ${employee.age} years old. ${employee.greet()} and I work as a ${employee.position} ${employee.employeeId} ${employee.gender}`);
}
let Stephen = {
    firstName: "Stephen",
    lastName: "Oloo",
    age: 23,
    employeeId: 10001,
    gender: "M",
    position: "Software Engineer",
    greet: function () {
        return `Hello, my name is ${this.firstName} ${this.lastName}`;
    },
};
//calling the function
createEmployee(Stephen);
