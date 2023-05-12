class Person {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    introduce() {
      console.log(`Hello, I’m ${this.firstName} ${this.lastName}`);
    }
}
  
  module.exports = Person;
  