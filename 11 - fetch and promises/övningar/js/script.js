// REST Countries - get countries by language

const form = document.querySelector('form');
form.addEventListener('submit', event =>{
    event.preventDefault();

    const language = form.querySelector('input').value;
    form.reset();


    const url = `https://restcountries.com/v3.1/lang/${language}`;

    fetch(url)
        .then( handleResponse )
        .then( displayCountries )
        .catch( displayError );
});

function handleResponse(response){
    if(response.status >= 400 && response.status < 500){
        throw 'Type a real language';
    }
    else if(!response.ok){
        throw 'Something went wrong.'
    }
    else{
        return response.json();
    }
}

function displayCountries(countries){
    // console.log(countries)
    const errorEl = document.querySelector("#error");
    errorEl.innerText = '';

    const divContainer = document.querySelector("#container");
    divContainer.innerHTML = '';

    for(const country of countries){
        // console.log(country.flags.png)
        // console.log(country.name.official)
        // console.log(country.subregion)


        const divCountryCard = document.createElement('div');
        const h1Name = document.createElement('h1');
        const pSubregion = document.createElement('p');
        const imgFlag = document.createElement('img');

        h1Name.innerText = country.name.official;
        pSubregion.innerText = country.subregion;
        imgFlag.src = country.flags.png;

        divCountryCard.append(h1Name, pSubregion, imgFlag);
        divContainer.append(divCountryCard);
    }
}

function displayError(error){
    // console.log(error);
    const errorEl = document.querySelector("#error");
    errorEl.innerText = error;
}