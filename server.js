const express = require("express");
const app = express();
const budget = require("./models/budget.js")


app.get("/", (req, res) => {

    res.send("budget app ");
  });
  



  app.listen(2000 ,() => {
    console.log("server is listening on port 2000");
});