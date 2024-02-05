// -ProtoTypes in JS
// -----------------
// A javaScript object is an entity having state and behavior (properties adn method).

// JS objects have a special property called prototype.

// We can set prototype using __proto__

// * if object & prototype have same method.
// objects method will be used.

const student = {
  fullName: "Mohi Uddin", // state
  marks: 90.5,
  printMarks: function () {
    // method
    console.log("Marks = ", this.marks); // this.marks means this object.marks (student.marks)
  },
};

const employee = {
  calcTax1() {
    console.log("Tax rate is 5%");
  },
  calcTax2: function () {
    console.log("Tax Rate is 10%");
  },
};

const qudraty = {
  salary: 5000,
  calcTax1() {
    console.log("Tax rate is 20%");
    //* if object & prototype have same method.objects method will be used.
  },
};

qudraty.__proto__ = employee; // we set the prototype

// -Classes in JS
// --------------
// Class is a program-code template for creating objects.

// those objects will have some state (variables) & some behavior (functions) inside it.

// class MyClass {
//     constructor(){...}
//     myMethod(){...}
// }

// let myObj = new MyClass();

// class ToyotaCar {
//   start() {
//     console.log("start");
//   }
//   stop() {
//     console.log("stop");
//   }
//   setBrand(brand) {
//     // this.brandName = brand;
//     this.brand = brand;
//   }
// }

// let fortune = new ToyotaCar();
// fortune.setBrand("Fortune");
// let lexus = new ToyotaCar();
// lexus.setBrand("Lexus");

// constructor() method is:
// -----------------------
// * automatically invoked by new
// * initializes object

class Car {
  constructor(brand, mileage) {
    console.log("new Object crated");
    this.brand = brand;
    this.mileage = mileage;
  }
  start() {
    console.log("start");
  }
  stop() {
    console.log("stop");
  }
}

let fortune = new Car("Fortune", 10);
console.log(fortune);
let lexus = new Car("Lexus", 30);
console.log(lexus);
