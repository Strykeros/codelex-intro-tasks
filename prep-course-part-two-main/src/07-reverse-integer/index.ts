/**
 * Reverse Integer
 *
 * For given integer return an integer that is the reverse
 * ordering of numbers.
 *
 * Examples:
 * reverseInt(15) === 51
 * reverseInt(981) === 189
 * reverseInt(500) === 5
 * reverseInt(-15) === -51
 * reverseInt(-90) === -9
 */

function reverse(int: number): number {
  if (int < 0) return -reverse(-int); // reverse(-123) === -reverse(123)
  let str: string = int.toString(); // "123"
  let strArray: string[] = str.split(""); // [ "1", "2", "3" ]
  let revArray: string[] = strArray.reverse(); // [ "3", "2", "1" ]
  let rev: string = revArray.join(""); // "321"
  return Number(rev);
}

export { reverse };
