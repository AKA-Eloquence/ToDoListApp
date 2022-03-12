"use strict"

const express = require("express");
const bP = require("body-parser");
const ejs = require("ejs");
const date = require(__dirname +"/date.js");

const app = express();

// Set view engine to EJS
app.set('view engine', 'ejs');

// get app to use bodyParser
app.use(bP.urlencoded({extended: true}));

// Serving static files
app.use(express.static("public"));

// Variable for next item in ToDoList
const listItems = ["Buy Food" , "Cook Food" , "Eat Food"];

const workItems = [];

// get request from home route
app.get("/" , (req , res ) => {

    const day = date.getDate();

    res.render("list" , {listType: day, newListItems: listItems});
});

// getting post request from homepage for next item
app.post("/", (req , res) => {

    const item = req.body.newItem;

    if (req.body.list === "Work") {
        workItems.push(item);
        res.redirect("/work");
    } else {
        listItems.push(item);
        res.redirect("/");
    }
});

// get request from work route
app.get("/work" , (req , res) => {
    res.render("list" , {listType : "Work" , newListItems: workItems});
});

// get request from about route
app.get("/about" , (req , res) => {
    res.render("about");
});

// app shal listen to port 3000
app.listen(3000, () => {
    console.log("server is running on port 3000");
})