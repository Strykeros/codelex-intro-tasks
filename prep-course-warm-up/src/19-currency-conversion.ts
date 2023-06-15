export {};

/**
 * Currency Formatting
 *
 * The business is now breaking into the Brazilian market
 * Write a new function for converting to the Brazilian real
 * They have also decided that they should add a 1% fee to all foreign transactions
 *
 * Additional Challange:
 * Find a way to add 1% to all currency conversions
 * (think about the DRY (don't repeat yourself) principle)
 * You are allowed to create your own functions
 * and use them in place of convertToUSD() and convertToBRL()
 */

function convertMoney(price: number, exchangeRate: number, percent: number) {
  const converted: string = (price * exchangeRate * percent).toFixed(2);
  return converted;
}

// You are allowed to change this function
function convertToUSD(price: number) {
  const converted: string = convertMoney(price, 1.41, 1.01);
  return converted;
}
// You are allowed to change this function
function convertToBRL(price: number) {
  const converted: string = convertMoney(price, 8.89, 1.01);
  return converted;
}

const product = "You don't know JS";
const price = 12.5;
const priceInUSD = convertToUSD(price);
const priceInBRL = convertToBRL(price);

console.log("Product: " + product);
console.log("Price: $" + priceInUSD);
console.log("Price: R$" + priceInBRL);

/* Expected output:

    > Product: You don't know JS
    > Price: $?
    > Price: R$?

*/
