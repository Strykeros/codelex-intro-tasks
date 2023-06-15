export {};

/**
 * Create a function protectEmail which hides some symbols of the email
 */

function protectEmail(email: string) {
  let hiddenEmail = "";
  for (let i = 0; i < email.length; i++) {
    if (i > 2 && i < email.indexOf("@")) {
      if (hiddenEmail.indexOf("...") === -1) {
        hiddenEmail += ".";
      }
    } else {
      hiddenEmail += email[i];
    }
  }
  return hiddenEmail;
}

console.log(protectEmail("secret123@codelex.io")); // Expected result: sec...@codelex.io
console.log(protectEmail("example@example.com")); // Expected result: exa...@example.com
console.log(protectEmail("12345@example.com")); // Expected result: 12...@example.com
console.log(protectEmail("12@example.com")); // Expected result: ...@example.com
