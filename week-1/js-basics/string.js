// String: length, indexOf(), lastIndexOf(), slice(), substring(), replace(), split(), trim(), toUpperCase(), toLowerCase(), etc.

let substr = " Hey, Welcome to Dev World ";
// console.log(substr.length);

// console.log(substr.indexOf("Dev"));

// String.slice(start,end)orString.slice(start,end)//end index is exclusive,start index is inclusive
// console.log(substr.slice(3));
// console.log(substr.slice(1, -3));
// console.log(substr.slice(-4));

//String.substring(start,end)
// console.log(substr.substring(4, 10));
// console.log(substr.substring(10, 4)); //If start>end both the start and end will be swapped
// console.log(substr.substring(-4)); //Negative values doesn't have any effect

//String.replace()//will not change the original string
// console.log(substr.replace("Dev", "My"));
// console.log(substr);

//String.split()//takes a pattern and divides this string into an ordered list of substrings and puts these substrings into an array and returns an array
// const str1 = substr.split(" ");
// const str2 = substr.split("to");
// console.log(str1); //return array of substring

//String.trim()//removes whitespace from both the ends of the string and returns the string
// console.log(substr.length);
// console.log(substr.trim());
// console.log(substr.trim().length);

//String.toUpperCase()
// console.log(substr.toUpperCase());
// console.log(substr);
