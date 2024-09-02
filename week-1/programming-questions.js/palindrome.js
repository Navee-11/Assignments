/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let str1 = str.toLowerCase();
  let str2 = "";
  for (let i = str1.length; i >= 0; i--) {
    str2 = str2 + str1.charAt(i);
  }
  //   console.log(str2);
  if (str1 == str2) return true;
  else return false;
}
console.log(isPalindrome("MalaYalam"));
