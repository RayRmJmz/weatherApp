const request = require('request');
let longitude ;
let latitude ;


const geocodificacion = (adress, callback)=>{
  const urlMapBox = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(adress)+'.json?access_token=pk.eyJ1IjoicmF5cm1qbXoiLCJhIjoiY2twMzZ4d2liMDFjcjJub3czZHc4YzdpZyJ9.km7WntJXacD9uaTeJ766GA';
  request({url : urlMapBox, json : true}, (error, {body})=>{
    if(error){
      callback('No se ha podido conectar al servicio de geocodificacion', undefined);
    }else if(body.features.length === 0){
      callback('No se ha podido encontrar la ubicacion solicitada', undefined);
    }else{
      longitude = body.features[0].center[0];
      latitude = body.features[0].center[1];
      //console.log('Ciudad: ' + response.body.features[0].text);
      //console.log('Place name: ' + response.body.features[0].place_name);
      //console.log('longitud: '+ longitude + ' latitud: ' + latitude);
      callback(undefined, {longitude:longitude, latitude:latitude});
    }
  });
}

module.exports = geocodificacion

/*
module.exports = {
    geocodificacion : geocodificacion
}*/
/*
const geocodificacion = (adress, callback)=>{
  const urlMapBox = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(adress)+'.json?access_token=pk.eyJ1IjoicmF5cm1qbXoiLCJhIjoiY2twMzZ4d2liMDFjcjJub3czZHc4YzdpZyJ9.km7WntJXacD9uaTeJ766GA';
  request({url : urlMapBox, json : true}, (error, response)=>{
    if(error){
      callback('No se ha podido conectar al servicio de geocodificacion', undefined);
    }else if(response.body.features.length === 0){
      callback('No se ha podido encontrar la ubicacion solicitada', undefined);
    }else{
      longitude = response.body.features[0].center[0];
      latitude = response.body.features[0].center[1];
      //console.log('Ciudad: ' + response.body.features[0].text);
      //console.log('Place name: ' + response.body.features[0].place_name);
      //console.log('longitud: '+ longitude + ' latitud: ' + latitude);
      callback(undefined, {longitude:longitude, latitude:latitude});
    }
  });
}
*/