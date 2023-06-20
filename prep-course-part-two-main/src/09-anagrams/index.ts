/**
 * Anagrams
 *
 * Return true of false depends on provided strings are anagrams of eachother.
 * One string is an anagram of another if it uses the same characters
 * in the same quantity. Only consider characters, not spaces
 * or punctuation. Consider capital letters to be the same as lower case.
 *
 * Examples:
 * anagrams('rail safety', 'fairy tales') === true
 * anagrams('RAIL! SAFETY!', 'fairy tales') === true
 * anagrams('Hi there', 'Bye there') === false
 */

function anagrams(stringA: string, stringB: string) {
  // removes spaces and punctuation, sorts both strings, 
  // and checks if they are the same.

  let cleanStrA: string = stringA.toLowerCase().replace(/[^a-zA-Z]/g, "");
  let cleanStrB: string = stringB.toLowerCase().replace(/[^a-zA-Z]/g, "");

  const sortedA: string = cleanStrA.split("").sort().join("");
  const sortedB: string = cleanStrB.split("").sort().join("");
  return sortedA === sortedB;
}

export { anagrams };
