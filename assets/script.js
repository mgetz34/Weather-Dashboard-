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

var input = document.getElementById("city-search")


function userInput(event) {
    event.preventDefault()
    cityName(input.value);
}

//function for city search 

function cityName(city) {
    var geoCodeUrl = "http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&appid=" + openWeatherAPI;
    // need to run fetch for geocode api
    fetch(geoCodeUrl).then(function (response) {
        return response.json()
    })
        .then(function (data) {
            console.log(data[0].lat, data[0].lon)

            currentWeather(data[0].lat, data[0].lon)
        })
}

// function for current weather data

function currentWeather(openWeatherAPI) {
    var currentWeatherUrl = "http://api.openweathermap.org/data/2.5/weather?&appid=" + openWeatherAPI;
    console.log(currentWeatherUrl);
    fetch(currentWeatherUrl).then(function (response) {
        return response.json()
    })
        .then(function (data) {
            console.log(data.clouds.main.weather.wind)

            forecast(data.clouds.main.weather.wind)
        })
}

// function for 5-day, 3-hour forecast data

function forecast() {
    var forecastUrl = "http://api.openweathermap.org/data/2.5/forecast?qlat=" + lat + "&lon=" + lon + "&appid=" + openWeatherAPI;
    fetch(forecastUrl).then(function (response) {
        return response.json()
    })
        .then(function (data) {
            console.log(data)
        })
}




searchForm.addEventListener("submit", userInput)