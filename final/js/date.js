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