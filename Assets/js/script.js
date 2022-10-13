//API KEY
var APIKey = "8cca571b18ba8e81934fe345100454ba";

var city;
var lat;
var lon;


// DOM
var cityInputEl = document.querySelector("#city-input");
var searchBtn = document.querySelector(".btn");
var searchHistoryEl = document.querySelector("#search-history");


//Local Storage get and set
var searchHistory = localStorage.getItem("City-Name");

var cityHistory = function (event) {
  event.preventDefault();
  localStorage.setItem("City-Name", cityInputEl.value);
  city = cityInputEl.value;
  console.log(city)

var weatherAPI = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + APIKey;
console.log(weatherAPI);

var forecastAPI = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=" + APIKey;
console.log(forecastAPI);

fetch(weatherAPI, {
  method: "GET",
})
  .then(function (response) {
    return response.json();
  })
  .then(function (response) {
    $(".city").text(response.name + " (Today)");
    $(".temp").text("Temperature: " + response.main.temp + " °F");
    $(".wind").text("Wind: " + response.wind.speed + " MPH");
    $(".hum").text("Humidity: " + response.main.humidity + " %");
    $("#main-looks-like").html("<img src='https://openweathermap.org/img/w/" + response.weather[0].icon + ".png' alt='Icon depicting current weather.'>")

    var lat = response.coord.lat;
    console.log(lat);
    var lon = response.coord.lon;
    console.log(lon);

  }
  );

  fetch(forecastAPI, {
    method: "GET",
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {

      //Day 1 Forecast
      $("#day-1-temp").text("Temperature: " + response.list[0].main.temp + " °F");
      $("#day-1-hum").text("Humidity: " + response.list[0].main.humidity + " %");
      $("#day-1-wind").text("Wind: "+ response.list[0].wind.speed + " MPH");
      $("#looks-like-1").html("<img src='https://openweathermap.org/img/w/" + response.list[0].weather[0].icon + ".png' alt='Icon depicting current weather.'>");

      //Day 2 Forecast
      $("#day-2-temp").text("Temperature: " + response.list[8].main.temp + " °F");
      $("#day-2-hum").text("Humidity: " + response.list[8].main.humidity + " %");
      $("#day-2-wind").text("Wind: "+ response.list[8].wind.speed + " MPH");
      $("#looks-like-2").html("<img src='https://openweathermap.org/img/w/" + response.list[8].weather[0].icon + ".png' alt='Icon depicting current weather.'>");

      //Day 3 Forecast
      $("#day-3-temp").text("Temperature: " + response.list[16].main.temp + " °F");
      $("#day-3-hum").text("Humidity: " + response.list[16].main.humidity + " %");
      $("#day-3-wind").text("Wind: "+ response.list[16].wind.speed + " MPH");
      $("#looks-like-3").html("<img src='https://openweathermap.org/img/w/" + response.list[16].weather[0].icon + ".png' alt='Icon depicting current weather.'>");

      //Day 4 Forecast
      $("#day-4-temp").text("Temperature: " + response.list[24].main.temp + " °F");
      $("#day-4-hum").text("Humidity: " + response.list[24].main.humidity + " %");
      $("#day-4-wind").text("Wind: "+ response.list[24].wind.speed + " MPH");
      $("#looks-like-4").html("<img src='https://openweathermap.org/img/w/" + response.list[24].weather[0].icon + ".png' alt='Icon depicting current weather.'>");

      //Day 5 Forecast
      $("#day-5-temp").text("Temperature: " + response.list[32].main.temp + " °F");
      $("#day-5-hum").text("Humidity: " + response.list[32].main.humidity + " %");
      $("#day-5-wind").text("Wind: "+ response.list[32].wind.speed + " MPH");
      $("#looks-like-5").html("<img src='https://openweathermap.org/img/w/" + response.list[32].weather[0].icon + ".png' alt='Icon depicting current weather.'>");
      
});

  for (var i = 0; i < localStorage.length; i++) {
    $("#search-history").append("<p>" + localStorage.getItem(localStorage.key(i)) + "</p>");
  }
}

//  Current Date and Time (updates every minute)
function updateTime() {
  today = moment().format('MMMM Do YYYY, h:mm a');
  $("#today").text(today);
}

setInterval(updateTime, 1000);

//5 Day Forecast Dates
var day1 = moment().add(1, 'days').format("dddd, MMM D");
$("#day1").text(day1);
var day2 = moment().add(2, 'days').format("dddd, MMM D");
$("#day2").text(day2);
var day3 = moment().add(3, 'days').format("dddd, MMM D");
$("#day3").text(day3);
var day4 = moment().add(4, 'days').format("dddd, MMM D");
$("#day4").text(day4);
var day5 = moment().add(5, 'days').format("dddd, MMM D");
$("#day5").text(day5);



//Search Button
searchBtn.addEventListener('click', cityHistory);