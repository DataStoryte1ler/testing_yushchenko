const { add, subtract, multiply, divide } = require("./math_operations");

describe("addition", () => {
  test.each([
    [2, 2, 4],
    [2, -2, 0],
    [0.1, 0.2, 0.3],
  ])("add %f to %f equals %f", (a, b, expected) => {
    expect(add(a, b)).toBeCloseTo(expected);
  });
});

describe("subtraction", () => {
  test.each([
    [4, 2, 2],
    [-4, 2, -6],
    [0.3, 0.1, 0.2],
  ])("subtract %f from %f equals %f", (a, b, expected) => {
    expect(subtract(a, b)).toBeCloseTo(expected);
  });
});

describe("multiplication", () => {
  test.each([
    [2, 3, 6],
    [2, -3, -6],
    [0.1, 0.2, 0.02],
  ])("multiply %f by %f equals %f", (a, b, expected) => {
    expect(multiply(a, b)).toBeCloseTo(expected);
  });
});

describe("division", () => {
    test.each([
      [6, 3, 2],
      [-6, 3, -2],
      [0.3, 0.1, 3],
    ])("divide %f by %f equals %f", (a, b, expected) => {
      expect(divide(a, b)).toBeCloseTo(expected);
    });
  });
