const apiURL = 'http://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=5155087f7a6b4b3be35a1e578260260f';

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {

        const fivedayforecast = jsObject.list.filter(x => x.dt_text.includes('18:00:00'));
        console.log(fivedayforecast);

        for (let i = 0; i < fivedayforecast.lenth; i++) {
            document.getElementsById(`forecast${i+1}`).
            textContent = fivedayforecast[i].main.temp;
        }
})