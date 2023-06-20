/**
 * Convert a phrase to its acronym.
 *
 * Techies love their TLA (Three Letter Acronyms)!
 *
 * Help generate some jargon by writing a program that converts a long name like Portable Network Graphics to its acronym (PNG).
 */

function parse(input: string) {
  // split sentence into words
  const words = input.replace("_", "").split(/[ -]/g);
  // go through each word
  let acronym: string = "";
  words.forEach((word) => {
    const firstChar = word.charAt(0).toUpperCase();
    acronym = acronym + firstChar;
  });
  return acronym;
}

export { parse };
