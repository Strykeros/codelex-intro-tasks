export {};

/**
 * Implement map function which works similarly as
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 * NB! The goal of this exercise is not to call .map inside your own map function,
 * but instead  you have to figure out how Array.prototype.map() works under the hood
 * and recreate the logic yourself.
 */

type numberFunction = (num: number) => number;

const map = (arr: number[], action: numberFunction) => {
  let newArr: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    let counter: number = action(arr[i]);
    newArr.push(counter);
  }
  return newArr;
};

const numbers = [1, 2, 3];

const doubled = map(numbers, (num: number) => {
  return num * 2;
});

console.log(doubled); // Expected result: [2, 4, 6]
