function includesObject(arr, obj) {
    return arr.some(item => JSON.stringify(item) === JSON.stringify(obj));
}
  
function includesWord(str, word) {
    return str.includes(word);
}

function hasField(obj, field) {
    return typeof obj === 'function' && field in obj();
}

function mapAndCall(arr, callback) {
    return arr.map(callback);
}

function stringToArray(str, callback) {
    const arr = str.split(" ");
    callback(arr);
}

module.exports = { includesObject, includesWord, hasField, mapAndCall, stringToArray };