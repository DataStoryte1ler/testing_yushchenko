const fetchData = require('./part6');

describe('Expected data', () => {
    test('fetchData returns expected data', () => {
        return expect(fetchData()).resolves.toEqual({
        userId: 1,
        id: 1,
        title: 'delectus aut autem',
        completed: false,
        });
    });
});