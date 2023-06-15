export {};

function concatenate(firstWord: string, secondWord: string, thirdWord: string) {
  // Write the body of this function to concatenate three words together with space between them
  let sentence: string = firstWord
    .concat(" ")
    .concat(secondWord)
    .concat(" ")
    .concat(thirdWord);

  return sentence;
}

const result = concatenate("Hello", "from", "CODELEX");
console.log(result); // Expected output: "Hello from CODELEX"
