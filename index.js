const express = require("express");
const path = require("path");
// Get functions from auth.js
const { createToken } = require("./auth");
const app = express();
// This is to parse request body for POST requests
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/public/login.html");
});
app.post("/login", (req, res) => {
  // This is to handle posted credentials and check if they are valid

  // Read username and password from request body
  const { username, password } = req.body;
  // Console log that somebody's trying to log in
  console.log(
    `Trying to log in with username: ${username} and password: ${password}`
  );
  // Check if the username and password are valid
  if (username === "mary" && password === "password") {
    // Create a JWT token
    const token = createToken(username);
    // Save token in a cookie
    res.cookie("token", token, {
      httpOnly: true,
    });
    // Login successful
    return res.json({ message: "Login successful!", token: token });
  }
  // Login failed
  return res.status(401).send("Login failed!");
});

app.get("/profile", (req, res) => {
  // This is only accessible if the user is logged in
  res.send("Hello Profile!");
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
