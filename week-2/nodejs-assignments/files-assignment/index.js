/**
 You need to create an express HTTP server in Node.js which will handle the logic of a file server.
- Use built in Node.js `fs` module
The expected API endpoints are defined below,
1. GET /files - Returns a list of files present in `./files/` directory
Response: 200 OK with an array of file names in JSON format.
Example: GET http://localhost:3000/files
2. GET /file/:filename - Returns content of given file by name
    Description: Use the filename from the request path parameter to read the file from `./files/` directory
    Response: 200 OK with the file content as the response body if found, or 404 Not Found if not found. Should return `File not found` as text if file is not found
    Example: GET http://localhost:3000/file/example.txt
- For any other route not defined in the server return 404
Testing the server - run `npm run test-fileServer` command in terminal
*/
const fs = require("fs");
const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.get("/", function (req, res) {
  res.send("Hello World!!");
});

app.get("/files", function (req, res) {
  fs.readdir(path.join(__dirname, "files"), function (err, data) {
    //path.join(__dirname, "/files")=>d:\Naveen\Assignments-0-100\week-2\nodejs-assignments\files-assignment\files
    if (err) {
      return res.status(500).json({ error: "Failed to Retrieve files" });
    }
    res.send(data);
  });
});

app.get("/files/:filename", function (req, res) {
  //http:localhost:3000/files/file1.txt
  const filePath = path.join(__dirname, "files", req.params.filename);
  //req.query.params is used when the url is like this http:localhost:3000/files?filename=file1.txt
  fs.readFile(filePath, "utf-8", function (err, data) {
    if (err) {
      return res
        .status(500)
        .json({ error: "Failed to Retrieve the contents in the file" });
    }
    res.send(data);
  });
});

app.all("*", function (req, res) {
  res.status(404).send("Route not found");
});

app.listen(port, function () {
  console.log(`Server is up and running at port ${port}`);
});
