const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const Budget = require("./models/budget.js");
const expressEjsLayouts = require("express-ejs-layouts");

//middlewares
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("index.ejs",{ Budget});
});

//index
// app.get("/budget", (req, res) => {

//     res.send(Budget);
//   });

app.get("/budget", (req, res) => {
  res.render("index.ejs", { Budget });
});

//Show
app.get("/budgets/:index", (req, res) => {
  const { index } = req.params;
  const budgetItem = Budget[index];
  res.render("show.ejs", { budgetItem });
});


//New
app.get("/budget/new", (req, res) => {
  res.render("new.ejs");
});

// app.post('/budget/new', (req, res) => {
//     console.log(req.body);
//     const newBudgetItem = req.body;
//     Budget.push(newBudgetItem);
//     res.redirect('index.ejs');
//   });

app.listen(2000, () => {
  console.log("server is listening on port 2000");
});
