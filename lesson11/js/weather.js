//Code for Weather
const openWeatherKey = '5155087f7a6b4b3be35a1e578260260f';

const townName = document.getElementById("town").textContent;
var townId = "0";

switch (townName) {
    case `Preston, Idaho`:
        townId = "5604473";
        break;
    case `Soda Springs, Idaho`:
        townId = "5607916";
        break;
    case `Fish Haven, Idaho`:
        townId = "5585000";
        break;
    default:
        townId = "5604473";
        break;
}

const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=' + townId + 'units=imperial&APPID=' + openWeatherKey;

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        const currently = document.querySelector('currently');
        const high = document.querySelector('high');
        const humidity = document.querySelector('humidity');
        const ws = document.querySelector('ws');

        currently.textContent = jsObject.main.temp;
        high.textContent = jsObject.main.temp_max;
        humidity.textContent = jsObject.main.humidity;
        ws.textContent = jsObject.wind.speed;
    })


//Code for Windchill
const temp = parseFloat(document.getElementById('temp').textContent);
const ws = parseFloat(document.getElementById('ws').textContent);

let wc = windChill(temp, s)
if (temp <= 50 && s > 3) {
    let windChill = (35.74 + (0.6215 * temp) - (35.75 * Math.pow(ws, 0.16)) + (0.4275 * temp * Math.pow(ws, 0.16))).toFixed(1);
    document.getElementById('windChill').textContent = windChill + "&#176;F";
} else {
    document.getElementById('windChill').textContent = "N/A";
}


//Code for Forecast
const openWeatherKey = '5155087f7a6b4b3be35a1e578260260f';

const townName = document.getElementById("town").textContent;
var townId = "0";

switch (townName) {
    case `Preston, Idaho`:
        townId = "5604473";
        break;
    case `Soda Springs, Idaho`:
        townId = "5607916";
        break;
    case `Fish Haven, Idaho`:
        townId = "5585000";
        break;
}

const forecast = "https://api.openweathermap.org/data/2.5/forecast?id=" + townIdF + "&units=imperial&APPID=" + openWeatherKeyF;

fetch(forecast)
    .then((response) => response.json())
    .then((jsObject) => {
        const fivedays = jsObject.list.filter(x => x.dt_text.includes('18:00:00'));
        for (let i = 0; i < fivedays.length; i++) {

            document.getElementById(`forecast${i+1}`).textContent = fiveDays[i].main.temp + "°F";
            const imagesrc = 'https://openweathermap.org/img/w/' + fiveDays[i].weather[0].icon + '.png';
            const desc = fiveDays[i].weather[0].description;

            document.getElementById(`icon${i+1}`).setAttribute('src', imagesrc);
            document.getElementById(`icon${i+1}`).setAttribute('alt', desc);

            const dayOfWeek = new Date(fiveDays[i].dt_txt);
            const daysOfTheWeek = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
            document.getElementById(`day${i+1}`).textContent = daysOfTheWeek[dayOfWeek.getDay()];
        }
    });