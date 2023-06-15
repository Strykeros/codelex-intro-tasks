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

function maxChar(str: string) {
  let max = 0;
  let commonChar = "";
  str.split("").forEach(function (char) {
    if (str.split(char).length > max) {
      max = str.split(char).length;
      commonChar = char;
    }
  });
  return commonChar;
}

export { maxChar };
