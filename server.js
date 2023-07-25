const express = require("express");
const app = express();
const Budget = require("./models/budget.js")

//middlewares
app.set("view engine", "ejs");
app.use(express.static('public'))

app.get("/", (req, res) => {

    res.send("hello world");
  });


//index 
app.get("/budget", (req, res) => {

    res.send(Budget);
  });
  

//Show

//New

//Create

  app.listen(2000 ,() => {
    console.log("server is listening on port 2000");
});