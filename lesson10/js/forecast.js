const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=5155087f7a6b4b3be35a1e578260260f';

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        document.getElementById('temp').textContent = jsObject.weather[0].description;
        document.getElementById('high').textContent = parseFloat(jsObject.main.temp_max).toFixed(0);
        document.getElementById('humidity').textContent = jsObject.main.humidity;
        document.getElementById('ws').textContent = jsObject.wind.speed.toFixed(0);
    })

const apiURLB = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=5155087f7a6b4b3be35a1e578260260f';

fetch(apiURLB)
    .then((response) => response.json())
    .then((jsObject) => {
        const fivedayforecast = jsObject.list.filter(x => x.dt_text.includes('18:00:00'));
        for (let i = 0; i < fivedayforecast.length; i++) {
        document.getElementsById(`temp${i+1}`).textContent = fivedayforecast[i].main.temp;
        const iconsrc = `https://openweathermap.org/img/w${iconName}.png`
        const iconName = fivedayforecast[i].weather[0].icon;
        const desc = fivedayforescast[i].weather[0].description;
        document.getElementById(`icon${i+1}`).setAttribute('src', iconsrc);
        document.getElementById(`icon${i+1}`).setAttribute('alt', desc);
    }
})




