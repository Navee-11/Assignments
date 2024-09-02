const fs = require("fs");

fs.writeFile(
  "a.txt",
  "I'm writing something into the file",
  "utf-8",
  function (err) {
    if (err) console.log(err);
    console.log("Written successfully");
  }
);
