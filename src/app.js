const express = require("express");
const weatherstacks = require("./weatherstacks");
const geocodificacion = require("./geocodificacion");

const app = express();

const port = 3000;

app.set("view engine", "ejs");

app.use(express.static("public"));


app.use(express.urlencoded({
    extended : true
}));

app.get("/", function(request, response){
  response.render("index");
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


app.listen(port, function(){
    console.log("Listenning at http://localhost:3000");
});