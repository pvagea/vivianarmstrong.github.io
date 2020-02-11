//Code for copyright and current date at the bottom of the webpage
var now = new Date();

var Weekday = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
var Month = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
document.write(Weekday[now.getDay()] + ", " + Month[now.getMonth()] + " " + now.getDate() + ", " + now.getFullYear());


//Code for the banner message at the top of the webpage to show up only on Friday
var today = new Date();
var date = today.getDay();
if (date == 5) {
    let text = "Saturday = Preston Pancakes in the Park!  9:00 a.m. Saturday at the city park pavilion.";
    document.getElementById("message").innerHTML = text;
    document.getElementById("message").style.backgroundColor = "#f9f960";
    document.getElementById("message").style.fontFamily = "lato";
    document.getElementById("message").style.textAlign = "center";
    document.getElementById("message").style.padding = "0.80em";
} else {

}