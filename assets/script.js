// User Story

// AS A traveler, I WANT to see the weather outlook for multiple cities
// SO THAT I can plan a trip accordingly

// Acceptance Criteria

// GIVEN a weather dashboard with form inputs
// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history
// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the wind speed
// WHEN I view future weather conditions for that city
// THEN I am presented with a 5 - day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city

var openWeatherAPI = "71943e874f3a60eaa03270f17d4ac3ea";

var searchForm = document.getElementById("search-form");

var input = document.getElementById("city-search");

var current = document.getElementById("current");

var storedCities = [];

// function captures event of pressing search for input 

function userInput(event) {
    event.preventDefault()
    cityName(input.value);
}

// Geocoding api call
// http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}

//function is responsible for the user city search conversion to lat and lon   

function cityName(city) {
    var geoCodeUrl = "http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&appid=" + openWeatherAPI;
    // need to run fetch for geocode api
    fetch(geoCodeUrl).then(function (response) {
        return response.json()
    })
        .then(function (data) {
            console.log(data[0].lat, data[0].lon);
        })
    var h1El = document.createElement("h1");
    h1El.textContent = (data[0].lat, data[0].lon);
    current.append(h1El);
}

// Current weather api call
// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

// function for finding current weather data with lat and lon

// function currentWeather(lat, lon) {
//     var lat = ("data[0].lat");
//     var lon = ("data[0].lat");
//     var currentWeatherUrl = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=" + openWeatherAPI;
//     fetch(currentWeatherUrl).then(function (response) {
//         return response.json()
//     })
//         .then(function (data) {
//             console.log(data)
//         })
// }

// 5-day / 3-hour api call
// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

// function for 5-day, 3-hour forecast data

// function forecast(currentWeather) {
//     var forecastUrl = "http://api.openweathermap.org/data/2.5/forecast?q=lat" + lat + "&lon=" + lon + "&appid=" + currentWeather + openWeatherAPI;
//     fetch(forecastUrl).then(function (response) {
//         return response.json()
//     })
//         .then(function (data) {
//             console.log(data)
//         })
// }

// function for the dymanic creation of cards per the user's input

function renderCards() {
    //DOM MANIPULATION
}


// EVENT LISTNERS


searchForm.addEventListener("submit", userInput)


//LOCAL STORAGE

//CREATE AN EMPTY ARRAY IN GLOBAL SCOPE

//PUSH USER INPUT TO THAT ARRAY (CITY)

//["CITY", "DENVER", "SEATTLE"]

//localStorage.getItem("cities")

//localStorage.setItem("cities", )