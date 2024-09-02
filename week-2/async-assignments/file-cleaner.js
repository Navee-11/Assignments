const fs = require("fs");

function removeSpaces(str) {
  let str1 = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] == " ") {
      str1 = str1 + str[i];
      while (str[i] == " ") {
        i++;
      }
    }
    str1 = str1 + str[i];
  }
  return str1;
}

fs.readFile("a.txt", "utf-8", function (err, data) {
  console.log(data);
  fs.writeFile("a.txt", removeSpaces(data), "utf-8", function (err) {
    if (err) console.log(err);
    console.log("Written successfully");
  });
});
