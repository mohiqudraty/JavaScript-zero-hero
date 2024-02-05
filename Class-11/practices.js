// Let's Practices
// ===============

// Qs-1: Creating a website for your college. Create a class User with 2 properties, name & email. It also has a method called viewData() that allows user to view website data.

let DATA = "Secret Data for College Website";

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  dataView() {
    console.log("Data is = ", DATA);
  }
}

let student1 = new User("mohi", "mohi@gamil.com");
let student2 = new User("nizam", "nizam@gamil.com");

let teacher = new User("qudraty", "qudraty@gamil.com");

// Qs-2: Crate a new class called Admin which inherits from User. Add a new method called editData to Admin that allows it to edit website data.

class Admin extends User {
  constructor(name, email) {
    super(name, email);
  }
  editData() {
    DATA = "Update Website Data from Admin";
  }
}

let admin = new Admin("admin", "admin@code.com");
