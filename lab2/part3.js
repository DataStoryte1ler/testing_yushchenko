async function addNumbers(a, b) {
    return new Promise((resolve, reject) => {
      if (typeof a === 'number' && typeof b === 'number') {
        resolve(a + b);
      } else {
        reject('Invalid arguments. Both arguments must be numbers.');
      }
    });
  }

  module.exports = addNumbers;