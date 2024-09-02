/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let str1Arr = convertStringstoArrayandSort(str1.toUpperCase());
  let str2Arr = convertStringstoArrayandSort(str2.toUpperCase());
  str1 = convertArraytoString(str1Arr);
  str2 = convertArraytoString(str2Arr);
  if (str1 === str2) return true;
  else return false;
}

// module.exports = isAnagram;

let str1 = "spar";
let str2 = [];

function convertStringstoArrayandSort(str) {
  return [...str].sort();
}

function convertArraytoString(str) {
  let data = "";
  str.forEach((item) => (data = data + item));
  return data;
}

console.log(isAnagram("spar", "gasp"));
