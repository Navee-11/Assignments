// You have been given an express server which has a few endpoints.
// Your task is to create a global middleware (app.use) which will
// maintain a count of the number of requests made to the server in the global
// requestCount variable

const request = require("supertest");
const assert = require("assert");
const express = require("express");
const app = express();
const port = 3000;
let rCount = 0;

const requestCount = (req, res, next) => {
  rCount = rCount + 1;
  next();
};

app.use(requestCount);

app.get("/", (req, res) => {
  res.status(200).send("Hi There!!");
});

app.get("/signup", (req, res) => {
  res.status(200).send("Feel free to create new account");
});
app.get("/signin", (req, res) => {
  res.status(200).send("Already an user.Please log in");
});

app.get("/requestCount", (req, res) => {
  res.status(200).send(`${rCount}`);
});

// app.listen(port, () => {
//   console.log(`Server is up and running at ${port}`);
// });
module.exports = app;
