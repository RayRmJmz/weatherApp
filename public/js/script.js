

addEventListener("load", loadWeather);

const address = document.querySelector("input");
const button = document.querySelector("#submit");

const message_1 = document.querySelector("#message-1");
const message_2 = document.querySelector("#message-2");
const message_3 = document.querySelector("#message-3");
const message_4 = document.querySelector("#message-4");


button.addEventListener("click",loadWeather);

function loadWeather () {
    let location = address.value;
    if (location === ""){
        location = "Colima";
        console.log(location);
    }else{
        console.log(location);
    }
    

    fetch("http://localhost:3000/getweather?address="+location).then((response)=>{
        response.json().then((data)=>{
            if(data.error){
                message_1.textContent = data.error;
            }else{
                document.getElementById("temperature").innerHTML  = data.temperature + " °C";
                document.getElementById("description").innerHTML  = data.weather_descriptions;
                document.getElementById("feelslike").innerHTML  = data.feelslike + " °C";
                document.getElementById("wind_peed").innerHTML  = data.wind_speed + " km/h";
                document.getElementById("precip").innerHTML  = data.precip + " mm";
                document.getElementById("humidity").innerHTML  = data.humidity + " %";
                
                document.getElementById("city").innerHTML  = data.city;
                document.getElementById("region").innerHTML  = data.region;
                document.getElementById("country").innerHTML  = data.country;
                document.getElementById("localtime").innerHTML  = data.localtime;
                document.getElementById("latitude").innerHTML  = "<b>Latitude: </b>" + data.latitude;
                document.getElementById("longitude").innerHTML  = "<b>Longitude: </b>" + data.longitude;
                console.log("weather code  " + data.weather_code);
                switch(data.weather_code){
                    case 113:
                    case 116:
                        document.body.style.backgroundImage = "url('img/113.jpg')";
                        document.getElementById("myImg").src = "img/113.gif";
                        break;
                    case 116:
                    case 116:
                        document.body.style.backgroundImage = "url('img/113.jpg')";
                        document.getElementById("myImg").src = "img/113.gif";
                        break;
                    case 119:
                    case 122:
                        document.body.style.backgroundImage = "url('img/122.jpg')";
                        document.getElementById("myImg").src = "img/122.png";
                        break;
                    case 176:
                    case 182:
                    case 185:
                    case 200:
                    case 263:
                    case 266:
                    case 281:
                    case 284:
                    case 293:
                    case 296:
                    case 299:
                    case 302:
                    case 305:
                    case 308:
                    case 311:
                        document.body.style.backgroundImage = "url('img/176.jpg')";
                        document.getElementById("myImg").src = "img/176.png";
                        break;    
                    case 143:
                    case 248:
                    case 260:
                        document.body.style.backgroundImage = "url('img/143.jpg')";
                        document.getElementById("myImg").src = "img/143.png";
                        break;
                    case 179:
                    case 227:
                    case 230:
                        document.body.style.backgroundImage = "url('img/179.jpg')";
                        document.getElementById("myImg").src = "img/179.png";
                    default:
                        document.body.style.backgroundImage = "url('https://weatherstack.com/site_images/weather_icon_partly_cloudy.svg')";
                        document.getElementById("myImg").src = "img/404.png";
                        //document.getElementById("icon").classList = "fa fa-sun fa-7x";
                        //document.body.style.backgroundColor = "hsl(0, 0%, 21%)";
                }
                console.log(data);

            }
        })
    });
}



/*
button.addEventListener("click", (e) => {
    const location = address.value;
    console.log(location);

    fetch("http://localhost:3000/getweather?address="+location).then((response)=>{
        response.json().then((data)=>{
            if(data.error){
                message_1.textContent = data.error;
            }else{
                message_1.textContent = data.weather_description
                message_2.textContent = data.temperature
                message_3.textContent = data.feelslike
                message_4.textContent = data.wind_speed
            }
        })
    });
});
*/