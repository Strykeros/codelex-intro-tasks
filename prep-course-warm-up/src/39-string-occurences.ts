export {};

const count = (str: string, word: string) => {
  let strArray = str.split(" ");
  let count = 0;
  strArray.forEach((element) => {
    if (word.toLowerCase() === element.toLowerCase()) {
      count++;
    }
  });
  return count;
};

console.log(count("The quick brown fox jumps over the lazy dog", "the")); // Expected output: 2
console.log(count("The quick brown fox jumps over the lazy dog", "fox")); // Expected output: 1
