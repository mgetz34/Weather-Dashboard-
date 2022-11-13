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

var forecastContainer = document.getElementById("fiveDay");

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
            currentWeather(data[0].lat, data[0].lon)
            // forecast(data[0].lat, data[0].lon);
        })
}

// Current weather api call
// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

// function for finding current weather data with lat and lon
//  city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the wind speed

function currentWeather(lat, lon) {
    var currentWeatherUrl = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&units=imperial" + "&appid=" + openWeatherAPI;
    console.log(currentWeatherUrl);
    fetch(currentWeatherUrl).then(function (response) {
        return response.json()
    })
        .then(function (data) {
            console.log(data);

            var h1El = document.createElement("h1");
            var h2El = document.createElement("h2");
            var h3El = document.createElement("h3");
            var p1El = document.createElement("p");
            var p2El = document.createElement("p");
            var p3El = document.createElement("p");


            h1El.textContent = "Weather in " + data.name;
            h2El.textContent = data.dt;
            h3El.textContent = data.weather[0].icon.src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
            p1El.textContent = data.main.feels_like + " °F";
            p2El.textContent = "Wind: " + data.wind.speed + " /MPH"
            p3El.textContent = data.main.humidity = " %";

            current.append(h1El);
            current.append(h2El);
            current.append(h3El);
            current.append(p1El);
            current.append(p2El);
            current.append(p3El);
        });
}

// 5-day / 3-hour api call
// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

// function for 5-day, 3-hour forecast data

// function forecast(lat, lon) {
//     var forecastUrl = "http://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + openWeatherAPI;
//     fetch(forecastUrl).then(function (response) {
//         return response.json()
//     })
//         .then(function (data) {

//             var weatherData = [];
//             weatherData.push(data.list[3], data.list[11], data.list[19], data.list[27], data.list[35])

//             renderCards(weatherData);
//         })
// }

// function for the dymanic creation of 5 day forecast cards per the user's input

// function renderCards(forecastFiveday) {
//     for (let index = 0; index < forecastFiveday.length; index++) {
//         const element = forecastFiveday[index];
//         console.log(element);

//         var card = document.createElement = ("div");

//         var liEldate = document.createElement = ("li");
//         var liElicon = document.createElement = ("li");
//         var liEltemp = document.createElement = ("li");
//         var liElspeed = document.createElement = ("li");
//         var liElhumidity = document.createElement = ("li");

//         liEldate.textContent = element.dt_txt;
//         liElicon.textContent = element.weather[0].icon;
//         liEltemp.textContent = element.main.temp + " °F";
//         liElspeed.textContent = element.wind.speed + " /mph";
//         liElhumidity.textContent = element.main.humidity + " %";

//         forecastContainer.append(liEldate);
//         forecastContainer.append(liElicon);
//         forecastContainer.append(liEltemp);
//         forecastContainer.append(liElspeed);
//         forecastContainer.append(liElhumidity);
//     }
// }
// EVENT LISTNERS


searchForm.addEventListener("submit", userInput)


//LOCAL STORAGE

//CREATE AN EMPTY ARRAY IN GLOBAL SCOPE

//PUSH USER INPUT TO THAT ARRAY (CITY)

//["CITY", "DENVER", "SEATTLE"]

//localStorage.getItem("cities")

//localStorage.setItem("cities", )