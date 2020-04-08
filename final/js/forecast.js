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
    