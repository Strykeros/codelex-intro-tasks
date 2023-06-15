/**
 * Longest Word
 *
 * Write a function that returns the longest word in the passed sentence.
 * If there are two or more words that are the same length, return
 * the first word from the string with that length. Ignore punctuation
 * and assume sentence will not be empty.
 *
 * Examples:
 * longestWord("Hello there") === "Hello"
 * longestWord("My name is Adam") === "name"
 * longestWord("fun&!! time") === "time"
 */

function longestWord(sen: string) {
  let words = sen.split(" ");
  const punctuation = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
  let strippedWords: string[] = [];
  words.forEach((word) => {
    strippedWords.push(word.replace(punctuation, ""));
  });
  let sortedWords = strippedWords.sort((a, b) => {
    return b.length - a.length;
  });

  return sortedWords[0];
}

export { longestWord };
