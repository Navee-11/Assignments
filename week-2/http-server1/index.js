const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3001;
const user = {
  name: "John",
  age: 24,
  job: "Software Engineer",
};
const var1 = "Ajay";
const var2 = "Ajay";
const var3 = "Ajay";
app.get("/", (req, res) => {
  res.send("Hello World!");
});
//middlewares
app.use(bodyParser.json());
app.post("/postrequest", (req, res) => {
  console.log(req.headers["authorization"]);
  console.log(req.body);
  console.log(req.query.name);
  res.send({ msg: "New code" });
});

app.post("/", (req, res) => {
  res.send({ var1, var2, var3 });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// fetch("http://localhost:3000", { method: "POST" }).then((res) =>
//   console.log(res.status)
// );
