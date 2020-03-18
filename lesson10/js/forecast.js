const apiURL = 'http://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=5155087f7a6b4b3be35a1e578260260f';

fetch(apiURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsObject) {
        const forecast = jsObject.list.filter(x => x.dt_text.includes('18:00:00'));
        console.log(forecast);
        for (let i = 0; i < forecast.length; i++) {
            document.getElementsById(`temp${i+1}`).textContent = forecast[i].main.temp.toFixed(0);
        }
    });
    
const apiURL = 'http://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=5155087f7a6b4b3be35a1e578260260f';

    fetch(apiURL)
    .then(function(response) {
        return response.json();
        for (let i = 0; i < forecast.length; i++) {
            const imagesrc = `https://openweathermap.org/img/w${jsObject.weather[0].icon}.png`
            const desc = forecast[i].weather[0].description;
            document.getElementById(`icon${i+1}`).setAttribute('src', imagesrc);
            document.getElementById(`icon${i+1}`).setAttribute('alt', desc);
        }
        document.getElementById('currently').textContent = jsObject.weather[0].description;
        document.getElementById('high').textContent = parseFloat(jsObject.main.temp_max).toFixed(0);
        document.getElementById('humidity').textContent = jsObject.main.humidity;
        document.getElementById('ws').textContent = jsObject.wind.speed.toFixed(0);

    });