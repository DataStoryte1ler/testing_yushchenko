const fetchAPI = require('./part5');

test('fetchAPI returns expected JSON object', async () => {
    const expected = {
      userId: 1,
      id: 1,
      title: 'delectus aut autem',
      completed: false,
    };
    const result = await fetchAPI();
    expect(result).toEqual(expected);
});