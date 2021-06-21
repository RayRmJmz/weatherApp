const express = require("express");
const path = require("path");
const hbs = require("hbs");
const weatherstacks = require("./utils/weatherstacks");
const geocoding = require("./utils/geocoding");
const { DefaultDeserializer } = require("v8");

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
  response.render('index');
});

app.get("/getweather", function(request, response){
    if(!request.query.address){
        return response.send({
            error: "You hace to provide an address!"
        });
    }

    geocoding(request.query.address, (error, data)=>{
        if(error){
            return console.log('error: ' , error);
        }
        weatherstacks(data.latitude, data.longitude, (error, data)=>{
            if(error){
                return console.log('error: ' , error);
            }else{
                //return console.log('Weaterstacks: ' , data);
                return response.send({
                    city : data.city,
                    region : data.region,
                    country : data.country,
                    latitude : data.latitude,
                    longitude : data.longitude,
                    localtime : data.localtime,
                    time : data.time, 
                    weather_descriptions : data.weather_descriptions,
                    weather_code : data.weather_code,
                    weather_icon : data.weather_icon,
                    temperature : data.temperature,
                    feelslike : data.feelslike,
                    wind_speed : data.wind_speed,
                    humidity : data.humidity,
                    precip :data.precip
                });
            }
        });
    });
    
});

app.get("/about", function(request, response){
    response.render("about");
});

app.get("/help", function(request, response){
    response.render("help");
});
app.get("/geocoding", function(request, response){
    response.render("geocoding");
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