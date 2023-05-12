function asyncFunction() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("hello world");
      }, 1000);
    });
}

module.exports = asyncFunction;
  