/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
  let max = numbers[0];
  numbers.forEach((item) => {
    if (item > max) {
      max = item;
    }
  });
  return max;
}
let arr = [29, 27, 31, 30, 11];
console.log("Output: " + findLargestElement(arr));
// module.exports = findLargestElement;
