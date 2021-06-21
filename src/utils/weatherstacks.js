const request = require('request');

let weather_descriptions;


const weaterstacks = (latitude, longitude, callback)=>{
    
    const url = 'http://api.weatherstack.com/current?access_key=d68290a9c6066ac8bf77552897b6becf&query='+latitude+','+longitude;
    request({url : url, json : true}, (error, response, )=>{
      if(error){
        callback('No se ha podido conectar al servicio de weaterstacks', undefined);
      }else{
        weather_descriptions = response.body.current.weather_descriptions[0];
        //console.log(response.body.location.name);
        callback(undefined,{
          city : response.body.location.name,
          region : response.body.location.region,
          country : response.body.location.country,
          latitude : response.body.location.lat,
          longitude : response.body.location.lon,
          localtime : response.body.location.localtime,
          time : response.body.current.observation_time, 
          weather_descriptions : response.body.current.weather_descriptions[0],
          weather_code : response.body.current.weather_code,
          weather_icon : response.body.current.weather_icons[0],
          temperature : response.body.current.temperature,
          feelslike : response.body.current.feelslike,
          wind_speed : response.body.current.wind_speed,
          humidity : response.body.current.humidity,
          precip :response.body.current.precip
          });
      }
    });
  }


  /*
request({url : url, json : true}, (error, response, )=>{
  weather_descriptions = response.body.current.weather_descriptions[0];
  request({
    method: 'POST',
    url: 'https://libretranslate.com/translate',
    body: JSON.stringify({
      q: weather_descriptions,
      source: "en",
      target: "es"
    }),
    headers: {
      "Content-Type": "application/json" 
    }},function (error, response, body) {
      if (error) throw new Error(error);
      const data = JSON.parse(response.body);
      console.log(data);
  });
  console.log('Hora consulta: ' + response.body.current.observation_time);
  console.log('Clima: ' + response.body.current.weather_descriptions[0]);
  console.log('Temperatura: ' + response.body.current.temperature + '°C');
  console.log('Temperatura sensacion termica: ' + response.body.current.feelslike + ' °C');
  console.log('Velocidad viento: ' + response.body.current.wind_speed + ' km/h');
  console.log('Humedad  : ' + response.body.current.humidity + ' %');
  console.log('Precipitacion  : ' + response.body.current.precip + ' %');
});
*/
module.exports = weaterstacks

/*
  module.exports = {
    weaterstacks : weaterstacks
}*/