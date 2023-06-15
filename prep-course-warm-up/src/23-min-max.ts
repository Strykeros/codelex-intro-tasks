export {};

/**
 * Try to find at least two different solutions for this exercise,
 * one of which does not use built-in Math methods.
 */

const minMath = (array: number[]) => {
  return Math.min(...array);
};

const min = (array: number[]) => {
  let sortedArr: number[] = array.sort();
  return sortedArr[0];
};

const maxMath = (array: number[]) => {
  return Math.max(...array);
};

const max = (array: number[]) => {
  let sortedArr: number[] = array.sort().reverse();
  return sortedArr[0];
};

console.log(minMath([1, 2, 3, 4, 5])); // Expected output: 1
console.log(minMath([9, -3, 6])); // Expected output: -3
console.log(maxMath([1, 2, 3, 4, 5])); // Expected output: 5
console.log(maxMath([9, -3, 6])); // Expected output: 9
