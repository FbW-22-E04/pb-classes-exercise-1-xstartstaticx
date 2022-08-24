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

// BONUS: 2nd way with methods

// class Employee {
//   constructor(firstname, lastname) {
//     this.firstname = firstname;
//     this.lastname = lastname;
//   }

//   createFullName() {
//     console.log(`${this.firstname} ${this.lastname}`);
//   }
//   createEmail() {
//     console.log(
//       `${this.firstname.toLowerCase()}.${this.lastname.toLowerCase()}@company.com`
//     );
//   }
// }

// const student1 = new Employee("Daniel", "Reiller");
// console.log(student1);

// console.log("---------1. Full Name-----------");
// student1.createFullName();
// console.log("---------2. Email-----------");
// student1.createEmail();
