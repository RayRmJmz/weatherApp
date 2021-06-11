const express = require("express");
const path = require("path");
const hbs = require("hbs");
const weatherstacks = require("./weatherstacks");
const geocodificacion = require("./geocodificacion");

const app = express();

const port = 3000;

//app.set("view engine", "ejs");
app.set("view engine", "hbs");

app.use(express.static("public"));

hbs.registerPartials(path.join(__dirname, "../", "/views/partials"));

app.use(express.urlencoded({
    extended : true
}));

app.get("/", function(request, response){
  response.render('index',{
    title : "Weather app",
    name : "Ramundo Ramos"
});
});

app.get("/about", function(request, response){
    response.render("about");
});

app.get("/help", function(request, response){
    response.render("help");
});

app.get("/weatherForecast", function(request, response){
    response.render("weatherForecast");
});

app.get("*", function(request, response){
    response.render("404");
});

app.listen(port, function(){
    console.log("Listenning at http://localhost:3000");
    //console.log(path.join(__dirname, "../", "/views/partials"));
});