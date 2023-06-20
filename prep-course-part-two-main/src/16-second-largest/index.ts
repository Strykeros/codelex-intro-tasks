/**
 * Second Largest
 *
 * Array of numbers are passed in the function, your task is to find the second largest number.
 */

function secondLargest(array: number[]) {
  
  // Sort the array in descending order using a compare function
  let sortedArray: number[] = array.sort(function (a, b) {
    return b - a;
  });
  
  return sortedArray[1];
}

export { secondLargest };
