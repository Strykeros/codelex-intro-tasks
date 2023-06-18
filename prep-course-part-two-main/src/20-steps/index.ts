/**
 * Steps
 *
 * Write a function that accepts a positive number N.
 * The function should prints a step shape
 * with N levels using the '#' character.
 *
 * Examples:
 * steps(2) = '# '
 *            '##'
 *
 * steps(3) = '#  '
 *            '## '
 *            '###'
 *
 * steps(4) = '#   '
 *            '##  '
 *            '### '
 *            '####'
 */

function steps(inputNumber: number) {
  let spaceCount: number = inputNumber - 1;
  for (let i = 1; i <= inputNumber; i++) {
    let pyramidRow = "#".repeat(i) + " ".repeat(spaceCount);
    console.log(pyramidRow);
    spaceCount--;
  }
}

export { steps };
