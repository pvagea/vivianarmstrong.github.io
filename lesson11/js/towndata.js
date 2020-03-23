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

const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
            const towns = jsonObject['towns'];
            for (let i = 0; i < towns.length; i++) {
                if (towns[i].name == 'Fish Haven' || towns[i].name == 'Preston' || towns[i].name == 'Soda Springs') {

                let eventsCard = document.createElement('div')
                let image = document.createElement('img');
                let title = document.createElement('h2');
                let eventsDates = document.createElement('div');
                let eventP1 = document.createElement('p');
                let eventP2 = document.createElement('p');
                let eventP3 = document.createElement('p');
                let line = document.createElement('hr');

                eventsCard.classList.add('eventsCard');
                image.classList.add('thinImg');
                title.classList.add('titleH2');
                eventsDates.classList.add('eventsDates');
                eventP1.classList.add('eventsP');
                eventP2.classList.add('eventsP');
                eventP3.classList.add('eventsP');
                line.classList.add('line');

                title.textContent = "Upcoming Events:";
                eventP1.textContent = townD.events[0];
                eventP2.textContent = townD.events[1];
                eventP3.textContent = townD.events[2];

                eventsCard.appendChild(title);
                eventsCard.appendChild(line);
                eventsDates.appendChild(eventP1);
                eventsDates.appendChild(eventP2);
                eventsDates.appendChild(eventP3);
                eventsCard.appendChild(eventsDates);

                document.querySelector('section.events').appendChild(eventsCard);
            }
        }
    });
