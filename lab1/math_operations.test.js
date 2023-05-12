const { add, subtract, multiply, divide } = require("./math_operations");

test("addition", () => {
  expect(add(2, 2)).toBe(4);
  expect(add(2, -2)).toBe(0);
});

test("subtraction", () => {
  expect(subtract(4, 2)).toBe(2);
  expect(subtract(-4, 2)).toBe(-6);
});

test("multiplication", () => {
  expect(multiply(2, 3)).toBe(6);
  expect(multiply(2, -3)).toBe(-6);
});

test("division", () => {
  expect(divide(6, 3)).toBe(2);
  expect(divide(6, 0)).toThrow();
});
