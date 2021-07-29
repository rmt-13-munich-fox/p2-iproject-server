require("dotenv").config();
const jwt = require("jsonwebtoken");

const generateToken = (id, name, email) => {
  const token = jwt.sign({ id, name, email }, process.env.SECRET);
  return token;
};

const verify = (token) => {
  const decoded = jwt.verify(token, process.env.SECRET);
};

module.exports = {
  generateToken,
  verify,
};
