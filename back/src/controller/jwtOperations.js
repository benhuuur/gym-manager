const jwt = require("jsonwebtoken");
require("dotenv").config();
class jwtOperations {
  static verifyJWT(token) {
    try {
      jwt.verify(token, process.env.SECRET);
      return true;
    } catch (error) {
      return false;
    }
  }
  static decodeJWT(token) {
    return jwt.decode(token);
  }
}

module.exports = jwtOperations;
