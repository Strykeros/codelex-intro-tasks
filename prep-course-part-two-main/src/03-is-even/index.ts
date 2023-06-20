/**
 * Is Even
 *
 * Determine if given number is even
 * without using a mathematic operator ( +, -, %, /, Math, ParseInt etc.)
 * nor a conditional operator.
 *
 * Examples:
 * isEven(4) === true
 * isEven(3) === false
 */

function isEven(n: number) {
  // checks if the input number divided by 1 is zero,
  // and returns true or false. 
  let evenNum: boolean = (n & 1) === 0 ? true : false;
  return evenNum;
}

export { isEven };
