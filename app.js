const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "\\views\\date.js");

const app= express();

const items = ["Buy food", "Cook food", "Eat food"];
const workItems = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res) {

    const day = date.getDate();
    
    // var currentDay = today.getDay();
    // var day = "";

    // switch (currentDay) {
    //     case 0:
    //         day = "Sunday";
    //         break;
    //     case 1:
    //         day = "Monday";
    //         break;
    //     case 2:
    //         day = "Tuesday";
    //         break;
    //     case 3:
    //         day = "Wedday";
    //         break;
    //     case 4:
    //         day = "Thursday";
    //         break;
    //     case 5:
    //         day = "Friday";
    //         break;
    //     case 6:
    //         day = "Saturday";
    //         break;
    //     default:
        
    //     console.log("Error: the value of the current day is equal to: " + currentDay);


    res.render("list", {listTitle: day, newListItems: items});

});

app.post("/", function(req, res) {
    const item = req.body.newItem;

    if(req.body.list === "Work") {
        workItems.push(item);
        res.redirect("/work");
    } else {
        items.push(item);
        res.redirect("/");
    }

 });


app.get("/work", function(req, res) {
     res.render("list", {listTitle: "Work List", newListItems: workItems});
 });


app.get("/about", function(req, res) {
    res.render("about");
});
 
app.post("/work", function(req, res) {
    const item =req.body.newItem;
    workItems.push(item);
    res.redirect("/work");
});

app.listen(3000, function() {
    console.log("Server is running on port 3000");
});
