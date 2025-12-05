import _ from "https://cdn.jsdelivr.net/npm/underscore@1.13.7/underscore-esm-min.js ";

async function getCountries(language){
    const url = `https://restcountries.com/v3.1/lang/${language}`;
    console.log(url)

    const response = await fetch(url);
    const countries = await response.json();

    return countries;
}

getCountries('arabic')
    .then( countries =>{
        console.log(countries)


        // const nameArray = countries.map( country => country.name.common)
        const nameArray = _.pluck(countries, 'name')
        console.log(nameArray);

        // Math.max()
        const highestPopulation = _.max(countries, country => country.population);
        console.log(highestPopulation);

        // Kolla upp hur ni använder sortBy och använd den utifrån egenskapen population
        const sortedCountries = _.sortBy(countries, 'population');
        console.log(sortedCountries)

        // groupBy subregion
        const groupedCountries = _.groupBy(countries, 'subregion');
        console.log(groupedCountries);
    })