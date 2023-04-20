const express = require("express");
const app = express();
// This is to parse request body for POST requests
const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/login", (req, res) => {
  // This is to handle posted credentials and check if they are valid
  
  // Read username and password from request body
    const { username, password } = req.body;
    // Console log that somebody's trying to log in
    console.log(`Trying to log in with username: ${username} and password: ${password}`);
});

app.get("/profile", (req, res) => {
  // This is only accessible if the user is logged in
  res.send("Hello Profile!");
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
