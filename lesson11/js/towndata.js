const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })

    .then(function (jsonObject) {
        const towns = jsonObject['towns'];
        for (let i = 0; i < towns.length; i++) {
            if (towns[i].name == 'Fish Haven' || towns[i].name == 'Preston' || towns[i].name == 'Soda Springs') {

                let card = document.createElement('section');
                let h2 = document.createElement('h2');
                let h3 = document.createElement('h3');
                let yearFounded = document.createElement('p');
                let population = document.createElement('p');
                let rainfall = document.createElement('p');
                let image = document.createElement('img');

                h2.textContent = towns[i].name;
                h3.textContent = towns[i].motto;
                yearFounded.textContent = "Year Founded: " + towns[i].yearFounded;
                population.textContent = "Population: " + towns[i].currentPopulation;
                rainfall.textContent = "Annual Rainfall: " + towns[i].averageRainfall + " inches";
                image.setAttribute('src', "images/" + towns[i].photo);
                image.setAttribute('alt', 'photo of ' + (towns[i].name));

                card.appendChild(h2);
                card.appendChild(h3);
                card.appendChild(yearFounded);
                card.appendChild(population);
                card.appendChild(rainfall);
                card.appendChild(image);

                document.querySelector('div.cards').appendChild(card);
            }
        }
    });


