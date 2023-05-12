const { sum, filterPositive, filterNegative } = require("./array_utils");

let testArray;

beforeAll(() => {
  testArray = [1, 2, -3, 4, -5];
});

describe("sum", () => {
  test("returns the sum of the array", () => {
    expect(sum(testArray)).toBe(-1);
  });
});

describe("filterPositive", () => {
  test("returns an array of positive numbers", () => {
    expect(filterPositive(testArray)).toEqual([1, 2, 4]);
  });
});

describe("filterNegative", () => {
  test("returns an array of negative numbers", () => {
    expect(filterNegative(testArray)).toEqual([-3, -5]);
  });
});