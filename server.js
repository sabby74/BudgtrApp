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
app.get("/budget/:index", (req, res) => {
  const { index } = req.params;
  const budgetItem = Budget[index];
  res.render("show.ejs", { budgetItem });
});


//create
app.get("/budgets/new", (req, res) => {
  res.render("new.ejs");
});

// app.post('/budgets/new', (req, res) => {
    //     const newBudgetItem = req.body;
    //     Budget.push(newBudgetItem);
    //     res.redirect('index.ejs');
    //   });
    app.post("/budgets/:id", (req, res) => {
        
        let budgetToUpdate = {
            // id: req.params.id,
            ...req.body,
        };
        
        for (let i = 0; i < Budget.length; i++) {
            if (Budget[i].id == req.params.id) {
                console.log("new budget added ");
                console.log(req.body);
            Budget[i] = budgetToUpdate;
        }
    }
    Budget.push(budgetToUpdate);
  
    res.render("show.ejs",{budgetItem: budgetToUpdate});
  });
  

app.listen(2000, () => {
  console.log("server is listening on port 2000");
});
