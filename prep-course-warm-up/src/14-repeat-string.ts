export {};

const repeatString = (char: string, repeatTimes: number) => {
  let outputStr: string = "";
  for (let i = 0; i < repeatTimes; i++) {
    outputStr += char;
  }

  return outputStr;
};

console.log(repeatString("a", 4)); // Expected output: 'aaaa'
console.log(repeatString("b", 5)); // Expected output: 'bbbbb'
