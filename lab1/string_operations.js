// Функція перевірки, чи є текстовий фрагмент паліндромом
function isPalindrome(str) {
    // Видаляємо всі не-буквено-цифрові символи та переводимо у нижній регістр
    const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    // Перевертаємо рядок та порівнюємо з оригіналом
    return cleanedStr === cleanedStr.split('').reverse().join('');
  }
  
  // Функція перевірки, чи є текстовий фрагмент анаграмою
  function isAnagram(str1, str2) {
    // Видаляємо всі не-буквено-цифрові символи та переводимо у нижній регістр
    const cleanedStr1 = str1.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    const cleanedStr2 = str2.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    // Сортуємо символи та порівнюємо два очищені рядки
    return cleanedStr1.split('').sort().join('') === cleanedStr2.split('').sort().join('');
  }
  
  // Експортуємо функції
  module.exports = { isPalindrome, isAnagram };