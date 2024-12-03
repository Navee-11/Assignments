const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());
app.get("/sum", (req, res) => {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  const sum = a + b;
  console.log(sum);
  //   res.status(200).send(sum);Since sum is a number it will throw error so we should pass it as a string
  res.status(200).send(sum.toString());
  //   res.send(sum.toString());
});

app.get("/interest", (req, res) => {
  const p = parseInt(req.query.principal);
  const t = parseInt(req.query.time);
  const r = parseInt(req.query.rate);
  const i = (p * t * r) / 100;
  const total = p + i;
  res.status(200).send({ total: total.toString(), interest: i.toString() });
});

app.listen(3000, () => {
  console.log("Server is up and running at port 3000");
});
