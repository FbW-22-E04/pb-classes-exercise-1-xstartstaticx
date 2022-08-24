class Employee {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
    // Complete the code!
    this.fullname = `${firstname} ${lastname}`;
    this.email = `${firstname.toLowerCase()}.${lastname.toLowerCase()}@company.com`;
  }
}
const emp1 = new Employee("Dan", "Reiller");

console.log("---------1. Full Name-----------");
// 1. Full name
console.log(emp1.fullname);

console.log("---------2. Email-----------");
// 2. Email
console.log(emp1.email);
