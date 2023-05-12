const asyncFunction = require('./part2');

describe('Async function', () => {
    test("asyncFunction returns 'hello world'", () => {
        return expect(asyncFunction()).resolves.toBe("hello world");
    });
});