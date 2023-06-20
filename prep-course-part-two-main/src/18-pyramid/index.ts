/**
 * Pyramid
 *
 * Write a function that accepts a positive number N.
 * The function should print a pyramid shape
 * with N levels using the # character.
 *
 * Examples:
 * pyramid(1) = '#'
 *
 * pyramid(2) = ' # '
 *              '###'
 *
 * pyramid(3) = '  #  '
 *              ' ### '
 *              '#####'
 */

function pyramid(n: number) {

  // prints out a hashtag pyramid 
  // by using calculated repeat functions for 3 strings
  for (let i = 1; i <= n; i++) {
    let str: string = " ".repeat(n - i);
    let repeatCount: number = i * 2 - 1;
    let str2: string = "#".repeat(repeatCount);
    console.log(str + str2 + str);
  }
}

export { pyramid };
