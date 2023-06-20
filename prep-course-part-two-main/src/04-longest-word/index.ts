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

  // Converts the input sentence into array,
  // removes any punctuation, sorts the word array,
  // by placing the longest words at the beginning of the array,
  // and returns the first word in the array.

  let words: string[] = sen.split(" ");
  const punctuation = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
  let strippedWords: string[] = [];
  words.forEach((word) => {
    strippedWords.push(word.replace(punctuation, ""));
  });
  let sortedWords: string[] = strippedWords.sort((a, b) => {
    return b.length - a.length;
  });

  return sortedWords[0];
}

export { longestWord };
