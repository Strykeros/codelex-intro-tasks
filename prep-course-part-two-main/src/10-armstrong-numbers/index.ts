/**
 * An Armstrong number is a number that is the sum of its own digits each raised to the power of the number of digits.
 *
 * For example:
 *
 *  9 is an Armstrong number, because 9 = 9^1 = 9
 *  10 is not an Armstrong number, because 10 != 1^2 + 0^2 = 1
 *  153 is an Armstrong number, because: 153 = 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
 *  154 is not an Armstrong number, because: 154 != 1^3 + 5^3 + 4^3 = 1 + 125 + 64 = 190
 *
 * Write some code to determine whether a number is an Armstrong number.
 */

function validate(n: number) {
  let numberOfDigits: number = n.toString().length;
  let sum: number = 0;
  let temp: number = n;

  while (temp > 0) {
    let digit = temp % 10;
    sum += Math.pow(digit, numberOfDigits);
    temp = Math.floor(temp / 10);
  }

  if (sum === n) {
    return true;
  } else {
    return false;
  }
}

export { validate };
