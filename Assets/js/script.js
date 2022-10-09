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

//5 Day Forecast Dates
var day1 = moment(). add(1,'days').format("dddd, MMM D");
$("#day1").text(day1);
var day2 = moment(). add(2,'days').format("dddd, MMM D");
$("#day2").text(day2);
var day3 = moment(). add(3,'days').format("dddd, MMM D");
$("#day3").text(day3);
var day4 = moment(). add(4,'days').format("dddd, MMM D");
$("#day4").text(day4);
var day5 = moment(). add(5,'days').format("dddd, MMM D");
$("#day5").text(day5);