//basic daatetypes
let isOkay:boolean = false;
let firstName:string = "Raphael";
let age:number = 30;
let hobbies:string[] = ["soccer", "gaming", "music"];
let details:[boolean, string, number] = [false,"Raphael", 30];
let any:any = "soccer";

//creating and calling a function
function greet(name: string): string {
  return `Hello, ${name}!`;
}

const userName: string = "TypeScript User";
console.log(greet(userName));

function add(a: number, b: number): number {
  return a + b;
}

console.log(add(5, 10));

//working with intefaces
//( help us to define the structure of an object or the shape of an object)

interface DreamCar {
  name: string;
  year: number;
  horsepower: number;
  isElectric: boolean;
}

function getCarDetails(car: DreamCar){
  console.log(`Car Name: ${car.name} Car Year: ${car.year} Horsepower: ${car.horsepower} Is Electric: ${car.isElectric}`);
}

getCarDetails({name:"Mecercedes Benz", year:2024, horsepower: 360, isElectric: false});

//creating an interface with optional properties(interface Oloo)
interface Person {
  firstName: string;
  lastName: string;
  age: number;
  greet():string;
  gender?: string; //optional property
}

function createPerson(person: Person): void {
  console.log(` ${person.firstName} ${person.lastName} is ${person.age} years old.${person.greet()} ${person.gender}`);
}

let stephen: Person = {
  firstName: "Stephen",
  lastName: "Oloo",
  age: 23,
  greet: function() {
    return `Hello, my name is ${this.firstName} ${this.lastName}`;
  },
}

//calling the function
createPerson(stephen);
//extending an interface
//to extend an interface use the extends keyword
interface Employee extends Person {
  employeeId: number;
  position: string;
}

function createEmployee(employee: Employee): void {
  console.log(` ${employee.firstName} ${employee.lastName} is ${employee.age} years old. ${employee.greet()} and I work as a ${employee.position} ${employee.employeeId} ${employee.gender}`);
}
//(... this is a spread operator)spread operator is used to copy properties from one object to another
let Stephen: Employee = {
  ...stephen,
  employeeId: 10001,
  gender: "M",
  position: "Software Engineer",
}

//calling the function
createEmployee(Stephen);

// interfaces can also be used to define the structure of a function

interface formatText {
  (text:string): string;
}

let upperCaseText: formatText = (text: string): string => {
  return text.toUpperCase();
}

console.log(upperCaseText("hello world"));

//creating a class & constructor & inheritance
class Animal{

  animalName: string;

  constructor(name: string){
    this.animalName = name;
  }
  makeSound(): void {
    console.log(`${this.animalName} makes a sound`);
  }
}

class Dog extends Animal {
  bark(): void {
    console.log(`${this.animalName} barks`);
  }
}

let dog = new Dog("Rover");
dog.bark();  

//Acess modifiers
//public, private, protected

class Person1 {
  public firstName: string;
  private lastName: string;
  protected age: number;

  constructor(firstName: string, lastName: string, age: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }


  getDetails(): void{
    console.log(`Name: ${this.firstName} ${this.lastName}, Age: ${this.age}`);
  }
}

class Employee1 extends Person1 {
  private employeeId: number;

  constructor(firstName: string, lastName: string, age: number, employeeId: number) {
    super(firstName, lastName, age);
    this.employeeId = employeeId;
  }
  getDetails(): void {
    super.getDetails();
    console.log(`Employee ID: ${this.employeeId}`);
  }
}

let person1 = new Person1("Stephen", "Oloo", 23);
person1.getDetails();
console.log(person1.firstName); // accessible
//console.log(person1.lastName); // not accessible
//console.log(person1.age); // not accessible