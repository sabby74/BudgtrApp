const express = require("express");
const app = express();
const budget = require("./models/budget.js")
app.set("view engine", "ejs");

//middlewares
app.use(express.static('public'))

app.get("/", (req, res) => {

    res.send("hello world");
  });


//index 
app.get("/budget", (req, res) => {

    res.send(budget);
  });
  



  app.listen(2000 ,() => {
    console.log("server is listening on port 2000");
});