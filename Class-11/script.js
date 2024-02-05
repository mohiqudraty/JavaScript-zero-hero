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
// ---------------------------------------------
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
// ----------------------------------------
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

// ----------------------------------------
// -Inheritance in JS
// ------------------
// inheritance is passing down properties & methods from parent class to child class.

// class Parent {

// }

// class Child extends Parent {

// }

// * if Child & Parent have same method, child's method will be used.[Method Overriding]

class Parent {
  hello() {
    console.log("Hello!");
  }
}
class Child extends Parent {}

let obj = new Child();
// console.log(obj.hello());

// -
// -
// -
// --------------------

// class Person {
//   constructor() {
//     this.species = "Homo sapiens";
//   }
//   eat() {
//     console.log("Eat");
//   }
//   sleep() {
//     console.log("Sleep");
//   }
//   work() {
//     console.log("doing nothing!");
//   }
// }

// class Engineer extends Person {
//   work() {
//     console.log("Solve problem, build something");
//   }
// }

// class Doctor extends Person {
//   work() {
//     console.log("treat patients");
//   }
// }

// let mohiObj = new Engineer();

// let p1 = new Person()
// Person {species: 'Homo sapiens'}

// let p2 = new Engineer()
// Engineer {species: 'Homo sapiens'}

// let p3 = new Doctor()
// Doctor {species: 'Homo sapiens'}

// -super keywords in JS
// ---------------------
// The super keywords is used to call the constructor of its parent class to access the parent's properties and methods.

// super(args) // calls Parent's constructor

// super.parentMethod(args)

// class Person {
//   constructor() {
//     console.log("enter parent constructor");
//     this.species = "Homo sapiens";
//   }
//   eat() {
//     console.log("Eat");
//   }
// }

// class Engineer extends Person {
//   constructor(branch) {
//     console.log("enter child constructor");
//     super(); // to invoked parent class constructor
//     this.branch = branch;
//     console.log("exit child constructor");
//   }

//   work() {
//     console.log("Solve problem, build something");
//   }
// }

// let engObj = new Engineer("Computer Eng"); //Uncaught ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor at new Engineer

class Person {
  constructor(name) {
    this.species = "Homo sapiens";
    this.name = name;
  }
  eat() {
    console.log("Eat");
  }
}

class Engineer extends Person {
  constructor(name) {
    super(name); // to invoked parent class constructor
  }

  work() {
    super.eat();
    console.log("Solve problem, build something");
  }
}

let engObj = new Engineer("Mohiuddin");

// -Error Handling
// ---------------
// try-catch

// try{

//     ...normal code

// }catch (err){

//     ...handling error

// }

let a = 10;
let b = 20;

console.log(a);
console.log(b + a);
try {
  console.log(b - c); //  error
} catch (error) {
  console.log(error);
}
console.log(b * a);
console.log(b / a);
console.log(b % a);
