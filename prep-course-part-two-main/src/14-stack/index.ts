/**
 * Stack
 *
 * Create a stack data structure. The stack
 * should be a class with methods 'push', 'pop', and
 * 'peek'.  Adding an element to the stack should
 * store it until it is removed.
 *
 * Examples:
 * const s = new Stack();
 * s.push(1);
 * s.push(2);
 * s.pop(); // returns 2
 * s.pop(); // returns 1
 */

class Stack {
  array: number[];

  constructor() {
    this.array = [];
  }

  // inserts the input number in array
  push(n: number) {
    this.array.push(n);
  }

  // removes the last number from array
  pop() {
    return this.array.pop();
  }

  // gets the the last number from array
  peek() {
    return this.array[this.array.length - 1];
  }
}

export { Stack };
