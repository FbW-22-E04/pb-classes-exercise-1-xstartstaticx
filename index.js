class Employee {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
    // Complete the code!
    // this.email = email;
    this.email = `${this.firstname.toLowerCase()}.${this.lastname.toLowerCase()}@company.com`;
    this.fullname = `${this.firstname} ${this.lastname}`;
  }
}
const newName = new Employee("Lala", "Christl");

console.log("---------1. Full Name-----------");
// 1. Full name
console.log(newName.fullname);
console.log("---------2. Email-----------");
// 2. Email
console.log(newName.email);
