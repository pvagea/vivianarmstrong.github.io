const apiURL = 'http://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=5155087f7a6b4b3be35a1e578260260f';

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {

        const forecast = jsObject.list.filter(x => x.dt_text.includes('18:00:00'));
            document.getElementById('currently').textContent = jsObject.weather[0].main;
            document.getElementById('high').innerHTML = parseFloat(jsObject.main.temp).toFixed(0);
            document.getElementById('humidity').innerHTML = jsObject.main.humidity;
            document.getElementById('ws').textContent = jsObject.wind.speed;


        for (let i = 0; i < forecast.lenth; i++) {
            document.getElementsById(`forecast${i+1}`).
            textContent = fivedayforecast[i].main.temp;
        }

        const imagesrc = `https://openweathermap.org/img/w${jsObject.weather[0].icon}.png`
        const desc = jsObject.weather[0].description;
        document.getElementById('imgsrc').textContent = imagesrc;
        document.getElementById('icon').setAttribute('src', imagesrc);
        document.getElementById('icon').setAttribute('alt', desc);

})