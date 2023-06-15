export {};

function greatest(x: number, y: number) {
  let result: number = x > y ? x : y;
  return result;
}

console.log(greatest(1, 2)); // Expected output: 2
console.log(greatest(5, 2)); // Expected output: 5
