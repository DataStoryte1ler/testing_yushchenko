const { includesObject, includesWord, hasField, mapAndCall, stringToArray } = require("./final_functions");

describe("includesObject", () => {
    const arr = [{ a: 1, b: 2 }, { c: 3, d: 4 }, { a: 1, b: 2 }];
  
    test("should return true if array includes the specified object", () => {
        expect(includesObject(arr, { c: 3, d: 4 })).toBe(true);
        });
  
    test("should return false if array does not include the specified object", () => {
        expect(includesObject(arr, { e: 5, f: 6 })).toBe(false);
        });
});
  
describe("includesWord", () => {
    const str = "The quick brown fox jumps over the lazy dog";
  
    test("should return true if string includes the specified word", () => {
        expect(includesWord(str, "fox")).toBe(true);
        });
  
        test("should return false if string does not include the specified word", () => {
        expect(includesWord(str, "cat")).toBe(false);
        });
});

describe('hasField', () => {
    test('returns true if the function returns an object with the specified field', () => {
        const obj = () => ({ id: 1, name: 'John' });
        const field = 'name';
        expect(hasField(obj, field)).toBe(true);
        });
      
    test('returns false if the function returns an object without the specified field', () => {
        const obj = () => ({ id: 1 });
        const field = 'name';
        expect(hasField(obj, field)).toBe(false);
        });
      
    test('returns false if the argument is not a function', () => {
        const obj = { id: 1, name: 'John' };
        const field = 'name';
        expect(hasField(obj, field)).toBe(false);
        });
});

describe("mapAndCall function", () => {
    test("should call the callback function for each element in the array", () => {
        const arr = [1, 2, 3];
        const mockCallback = jest.fn();
        mapAndCall(arr, mockCallback);
        expect(mockCallback).toHaveBeenCalledTimes(arr.length);
    });
});

describe("stringToArray", () => {
    test("calls callback with array of words", () => {
        const mockCallback = jest.fn();
        stringToArray("Hello world", mockCallback);
        expect(mockCallback).toHaveBeenCalledWith(["Hello", "world"]);
    });
  
    test("calls callback with empty array if empty string is provided", () => {
        const mockCallback = jest.fn();
        stringToArray("", mockCallback);
        expect(mockCallback).toHaveBeenCalledWith([]);
    });
});
