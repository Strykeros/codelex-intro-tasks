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
  // checks if there are any vowels using regex,
  // and returns the number of vowels in the input string.
  let matchedLetters: RegExpMatchArray | null = s.match(/[aeiouy]/gi);
  return matchedLetters === null ? 0 : matchedLetters.length;
}

export { vowels };
