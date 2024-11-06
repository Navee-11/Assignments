const jwt = require("jsonwebtoken");
const jwtPassword = "secret";
const zod = require("zod");

const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(6);

function signJwt(username, password) {
  const usernameResponse = emailSchema.safeParse(username);
  const passwordResponse = passwordSchema.safeParse(password);
  //   console.log(usernameResponse.success);
  //   console.log(passwordResponse.success);
  if (!usernameResponse.success || !passwordResponse.success) {
    return null;
  }
  const signature = jwt.sign({ username }, jwtPassword);
  //   console.log(signature);
  return signature;
}

function verifyJwt(token) {
  try {
    const verified = jwt.verify(token, jwtPassword);
    return true;
  } catch (error) {
    return false;
  }
}

function decodeJwt(token) {
  const decoded = jwt.decode(token); //jwt can be decoded irrespective of the jwtPassword
  console.log(decoded);
  if (decoded) return true;
  else return false;
}

const ans = signJwt("naveen.ramamurthy@gmail.com", "12345546");
console.log(ans);
const verify = verifyJwt(ans);
console.log(verify);
console.log(decodeJwt("asaaaadsa"));
console.log(decodeJwt(ans));
