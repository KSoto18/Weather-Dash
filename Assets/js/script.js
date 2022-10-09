var APIKey = "8cca571b18ba8e81934fe345100454ba";
var city;

var queryURL = "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=8cca571b18ba8e81934fe345100454ba";

function getApi(queryURL) {
   fetch(queryURL)
     .then(function (response) {
       console.log(response);
       return response.json();
   });
 }
 
 getApi(queryURL);

//  Current Date and Time
function updateTime() {
     today = moment().format('MMMM Do YYYY, h:mm a');
     $('#today').text(today);
}

setInterval(updateTime, 500);