const rejectPromise = require('./part4');

test('rejectPromise function should reject with an expected error', async () => {
    await expect(rejectPromise()).rejects.toThrow('Something went wrong');
  });
  