const addNumbers = require('./part3');

test('addNumbers function should add two numbers and return the sum', async () => {
    const result = await addNumbers(2, 3);
    expect(result).toBe(5);
  });
  