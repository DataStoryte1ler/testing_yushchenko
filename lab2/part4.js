async function rejectPromise() {
    return Promise.reject(new Error('Something went wrong'));
}

module.exports = rejectPromise;
  