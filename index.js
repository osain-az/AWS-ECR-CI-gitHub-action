const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to  AWS ECR CI");
});

app.get("/status", (req, res) => {
  res.send("Image was uploaded successfully! ");
});

let port = 3000
app.listen(port, () => {
  console.log("The app is running on port ", port);
});
