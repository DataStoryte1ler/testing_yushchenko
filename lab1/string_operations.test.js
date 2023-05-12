const { isPalindrome, isAnagram } = require('./string_operations');

describe('isPalindrome', () => {
  test('returns true for palindromes', () => {
    expect(isPalindrome('A man a plan a canal Panama')).toBe(true);
    expect(isPalindrome('racecar')).toBe(true);
    expect(isPalindrome('Was it a car or a cat I saw?')).toBe(true);
  });

  test('returns false for non-palindromes', () => {
    expect(isPalindrome('hello')).toBe(false);
    expect(isPalindrome('world')).toBe(false);
  });
});

describe('isAnagram', () => {
  test('returns true for anagrams', () => {
    expect(isAnagram('rail safety', 'fairy tales')).toBe(true);
    expect(isAnagram('Tom Marvolo Riddle', 'I am Lord Voldemort')).toBe(true);
  });

  test('returns false for non-anagrams', () => {
    expect(isAnagram('hello', 'world')).toBe(false);
    expect(isAnagram('foo', 'bar')).toBe(false);
  });
});
