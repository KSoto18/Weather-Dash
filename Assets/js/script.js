//API KEY
var APIKey = "8cca571b18ba8e81934fe345100454ba";

var city;


var weatherAPI = "https://api.openweathermap.org/data/2.5/weather?q=orlando&appid="+ APIKey;
    console.log(weatherAPI);

// DOM
var cityInputEl = document.getElementById("city-input");
console.log(cityInputEl);
var searchBtn = document.querySelector(".btn");
var searchHistoryEl = document.querySelector("search-history");


//Local Storage get and set
var searchHistory = localStorage.getItem("City-Name");

function cityHistory() {
   localStorage.setItem("City-Name", cityInputEl.value);
   console.log(cityInputEl.value)
   
}

   for (var i = 0; i < localStorage.length; i++) {
   $("#search-history").append("<p>" + localStorage.getItem(localStorage.key(i)) + "</p>");
 }

 fetch(weatherAPI, {
   method: "GET", 
   })
   .then(function (response) {
     return response.json();
   })
   .then(function (data) {
     console.log(data);
   }
   );


//  Current Date and Time
function updateTime() {
     today = moment().format('MMMM Do YYYY, h:mm a');
     $('#today').text(today);
}

setInterval(updateTime, 1000);

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


//Search Button
searchBtn.addEventListener('click', cityHistory);