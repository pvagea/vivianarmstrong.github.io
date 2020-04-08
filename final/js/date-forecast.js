//Code for banner on Preston page
var today = new Date();
var date = today.getDay();
if (date == 5) {
    document.write("<center>"+"Saturday = Preston Pancakes in the Park!  9:00 a.m. Saturday at the city park pavilion."+"</center>")
}

else {
 
}

//Code for copyright and current date at the bottom of the webpage
let d = new Date();
let currentYear = d.getFullYear();
document.getElementById('currentYear').textContent = currentYear;

let weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

let month = new Array(12);
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";

let currMonth = month[d.getMonth()];
let currDay = weekday[d.getDay()];
let stringDate = currDay + ", " + d.getDate() + " " + currMonth + " " + currentYear;
document.getElementById("todayDate").textContent = stringDate;

const apiURL = 'https://api.openweathermap.org/data/2.5/weather?lat=45&lon=116&units=imperial&APPID=5155087f7a6b4b3be35a1e578260260f';

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        document.getElementById('temp').textContent = jsObject.weather[0].description;
        document.getElementById('high').textContent = parseFloat(jsObject.main.temp_max).toFixed(0);
        document.getElementById('humidity').textContent = jsObject.main.humidity;
        document.getElementById('ws').textContent = jsObject.wind.speed.toFixed(0);
    })

    const temp = parseFloat(document.getElementById('temp').textContent);
    const ws = parseFloat(document.getElementById('ws').textContent);
    
        if (temp <= 50 && ws > 3) {
            let windChill = (35.74 + (0.6215 * temp) - 35.75 * Math.pow(ws, 0.16) + 0.4275 * temp * Math.pow(ws, 0.16)).toFixed(1);
            document.getElementById('windChill').textContent = windChill;
        } else {
            document.getElementById('windChill').textContent = "N/A";
        }
    