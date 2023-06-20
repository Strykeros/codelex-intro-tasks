/**
 * Reverse String
 *
 * For given string return a new string
 * with the reversed order of characters.
 *
 * Examples:
 * reverse('apple') === 'elppa'
 * reverse('hello') === 'olleh'
 * reverse('Greetings!') === '!sgniteerG'
 */

function reverse(text: string) {
  // removes whitespaces at the start and the end of the text,
  // converts text to array, reverses it, and converts back to string.
  text.trim();
  return text.split("").reverse().join("");
}

export { reverse };
