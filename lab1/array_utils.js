// Повертає суму елементів масиву
function sum(arr) {
    return arr.reduce((acc, val) => acc + val, 0);
}
  
// Фільтрує масив і повертає тільки позитивні числа
function filterPositive(arr) {
    return arr.filter((num) => num > 0);
}
  
// Фільтрує масив і повертає тільки негативні числа
function filterNegative(arr) {
    return arr.filter((num) => num < 0);
}
  
module.exports = { sum, filterPositive, filterNegative };