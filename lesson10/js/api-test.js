const apiURL = 'http://api.openweathermap.org/data/2.5/weather?id=5604473&unites=imperial&APPID=5155087f7a6b4b3be35a1e578260260f';

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
    })