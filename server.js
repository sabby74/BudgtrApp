const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const Budget = require("./models/budget.js")

//middlewares
app.set("view engine", "ejs");
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {

    res.send("hello world");
  });


//index 
// app.get("/budget", (req, res) => {

//     res.send(Budget);
//   });
  
app.get("/budget", (req, res) => {

    res.render("index.ejs", {Budget});
  });
  

//Show

//New

//Create

  app.listen(2000 ,() => {
    console.log("server is listening on port 2000");
});