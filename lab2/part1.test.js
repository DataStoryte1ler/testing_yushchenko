const { greet, greetUser } = require('./part1');

// Тест, який перевіряє, чи правильно викликається функція 2 з аргументами name і lastname
describe('greetUser function', () => {
  it('should call greet function with name=John and lastname=Doe', () => {
    // Імітуємо функцію greet, щоб перевірити, чи вона викликається з правильними аргументами
    const greetMock = jest.fn(greet);

    // Викликаємо функцію greetUser з аргументами name=John і lastname=Doe
    greetMock('John', 'Doe');

    // Перевіряємо, чи була викликана функція greet з правильними аргументами
    expect(greetMock).toHaveBeenCalledWith('John', 'Doe');
  });
});