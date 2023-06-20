/**
 * Max Char
 *
 * For given string return the character that is most
 * commonly used in the string.
 *
 * Examples:
 * maxChar("abcccccccd") === "c"
 * maxChar("apple 1231111") === "1"
 */

function maxChar(inputStr: string) {
  let max: number = 0;
  let commonChar: string = "";

  // Split the input string into an array of individual characters, iterate over each character
  // and return the most common char.
  inputStr.split("").forEach(function (char) {
    if (inputStr.split(char).length > max) {
      max = inputStr.split(char).length;
      commonChar = char;
    }
  });
  return commonChar;
}

export { maxChar };
