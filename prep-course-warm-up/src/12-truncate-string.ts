export {};

function truncateString(text: string, length: number) {
  let substr: string = text.substring(0, length);
  return substr;
}

console.log(truncateString("CODELEX", 4)); // Expected output: CODE
