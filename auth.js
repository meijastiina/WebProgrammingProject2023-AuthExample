const { sign, verify } = require("jsonwebtoken");
// Define a secret key to sign the JWT token
const SECRET_JWT_KEY = "PWv8VRFXgPQkfPpV4NFq";

// Function to generate a JWT token
const createToken = (username) => {
  // Generate JWT with jsonwebtoken.sign method
  const token = sign({ username: username }, SECRET_JWT_KEY, {
    expiresIn: "1d",
  });
  // return the token
  return token;
};
// Function to verify a JWT token

// Export the functions so that they can be used in other files
exports.createToken = createToken;
