// Функція 2, яку будемо імітувати
function greet(name, lastname) {
    return `Hello, ${name} ${lastname}!`;
  }
  
// Функція 1, яка викликає функцію 2 з аргументами name і lastname
function greetUser(name, lastname) {
    return greet(name, lastname);
}

module.exports = { greet, greetUser };