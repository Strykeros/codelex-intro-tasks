/**
 * Vowels
 *
 * Write a function which returns number of vowels in given string.
 *
 * Examples:
 * vowels('aeiou') === 5
 * vowels('Adam') === 2
 * vowels('Hello there!') === 4
 */

function vowels(s: string) {
  let matchedLetters = s.match(/[aeiou]/gi);
  return matchedLetters === null ? 0 : matchedLetters.length;
}

export { vowels };
