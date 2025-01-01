const jwt = require("jsonwebtoken");
// const {JWT_SECRET}=require("../index.js");//This is not working when imported from index.js
const { JWT_SECRET } = require("../config");
// Middleware for handling auth
async function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
  const token = req.headers.authorization;
  const words = token.split(" "); // ["Bearer", "token"]
  const jwtToken = words[1]; // token
  const decodedValue = await jwt.verify(jwtToken, JWT_SECRET);
  console.log(decodedValue);
  if (decodedValue.username) {
    next();
  } else {
    res.status(403).json({
      msg: "You are not authenticated",
    });
  }
}

module.exports = adminMiddleware;
