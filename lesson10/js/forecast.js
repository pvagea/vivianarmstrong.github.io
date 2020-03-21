const apiURL = '5155087f7a6b4b3be35a1e578260260f';
fetch(weather)
    .then((response) => response.json())
    .then((jsObject) => {

        document.getElementById('currently').textContent = jsObject.weather[0].description;
        document.getElementById('high').textContent = parseFloat(jsObject.main.temp_max).toFixed(0);
        document.getElementById('humidity').textContent = jsObject.main.humidity;
        document.getElementById('ws').textContent = jsObject.wind.speed.toFixed(0);
});

