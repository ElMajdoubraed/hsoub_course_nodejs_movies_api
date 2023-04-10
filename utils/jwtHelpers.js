const jwt = require("jsonwebtoken");

const secret = process.env.JWT_SECRET;
const expiresIn = process.env.JWT_EXPIRES_IN;

/**
 * Generate JWT.
 * @param payload
 */
exports.sign = (payload) => {
  return jwt.sign(payload, secret, { expiresIn });
};

/**
 * Verify JWT and get the payload.
 * @param token
 */
exports.verify = (token) => {
  try {
    return jwt.verify(token, secret);
  } catch (e) {
    return false;
  }
};
