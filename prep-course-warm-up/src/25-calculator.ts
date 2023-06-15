export {};

function add(numA: number, numB: number) {
  return numA + numB;
}

function subtract(numA: number, numB: number) {
  return numA - numB;
}

function sum(numbers: number[]) {
  const result = numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  return result;
}

function multiply(numbers: number[]) {
  const result = numbers.reduce(
    (accumulator, currentValue) => accumulator * currentValue,
    1
  );
  return result;
}

function power(numA: number, numB: number) {
  return Math.pow(numA, numB);
}

console.log(add(1, 2)); // Expected output: 3
console.log(subtract(1, 2)); // Expected output: -1
console.log(sum([1, 2, 3])); // Expected output: 6
console.log(multiply([1, 2, 3])); // Expected output: 6
console.log(power(2, 3)); // Expected output: 8
