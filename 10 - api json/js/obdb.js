const breweryJson = `[{"id":"5e69d342-1efc-469e-bf8b-22d276c6d863","name":"Berlin Craft Beer Experience","brewery_type":"bar","address_1":"Reichenberger Str. 176","address_2":null,"address_3":null,"city":"Berlin","state_province":"Berlin","postal_code":"10999","country":"Germany","longitude":52.4995161,"latitude":13.4168836,"phone":"4915779216971","website_url":"http:\/\/www.berlincraftbeerexperience.com\/","state":"Berlin","street":"Reichenberger Str. 176"},{"id":"c75eb363-ba15-4f96-a3cf-d6462867a4e3","name":"Berlin Craft Beer Experience","brewery_type":"bar","address_1":"Reichenberger Str. 176","address_2":null,"address_3":null,"city":"Berlin","state_province":"Berlin","postal_code":"10999","country":"Germany","longitude":52.4995161,"latitude":13.4168836,"phone":"4915779216971","website_url":"http:\/\/www.berlincraftbeerexperience.com\/","state":"Berlin","street":"Reichenberger Str. 176"},{"id":"69bdb3dd-708a-430b-ac8c-5346f382f0d3","name":"Birgit","brewery_type":"beergarden","address_1":"Schleusenufer 3","address_2":null,"address_3":null,"city":"Berlin","state_province":"Berlin","postal_code":"10997","country":"Germany","longitude":52.5093176,"latitude":13.4123414,"phone":"491725746904","website_url":"https:\/\/www.birgit.club\/","state":"Berlin","street":"Schleusenufer 3"}]`;
const breweryObj = JSON.parse(breweryJson);
// console.log(breweryObj);
showBreweryName(breweryObj);

function showBreweryName(arr){
    for(const brewery of arr){
        console.log(brewery.website_url);

        const h1 = document.createElement('h1');
        document.body.appendChild(h1);
        h1.innerText = brewery.name;

        const aEl = document.createElement('a');
        document.body.appendChild(aEl);
        aEl.innerText = 'Visit website >>';
        aEl.href = brewery.website_url;
    }
}

// Sök på öl från san diego, max 4 bryggerier
// Lägg till en länk till bryggeriets webbsida för varje bryggeri
const sanDiegoJSON = `[{"id":"ef970757-fe42-416f-931d-722451f1f59c","name":"10 Barrel Brewing Co","brewery_type":"large","address_1":"1501 E St","address_2":null,"address_3":null,"city":"San Diego","state_province":"California","postal_code":"92101-6618","country":"United States","longitude":-117.129593,"latitude":32.714813,"phone":"6195782311","website_url":"http:\/\/10barrel.com","state":"California","street":"1501 E St"},{"id":"5fdcc498-f9df-4fa5-b35d-487a59f0fecc","name":"2Kids Brewing Company","brewery_type":"micro","address_1":"8680 Miralani Dr Ste 123","address_2":null,"address_3":null,"city":"San Diego","state_province":"California","postal_code":"92126-6391","country":"United States","longitude":-117.137429,"latitude":32.896584,"phone":"8584805437","website_url":"http:\/\/www.2kidsBrewing.com","state":"California","street":"8680 Miralani Dr Ste 123"},{"id":"3b0b5b9b-f6d8-49e3-8ebd-0bcef6939bcd","name":"32 North Brewing Co","brewery_type":"brewpub","address_1":"8655 Production Ave Ste A","address_2":null,"address_3":null,"city":"San Diego","state_province":"California","postal_code":"92121-2258","country":"United States","longitude":-117.1649842,"latitude":32.88313237,"phone":"(619) 363-2622","website_url":"https:\/\/42northbrewing.com","state":"California","street":"8655 Production Ave Ste A"},{"id":"4db32843-26ff-4e73-9e24-1cb874109b24","name":"Abnormal Beer Company","brewery_type":"micro","address_1":"16990 Via Tazon Ste 123","address_2":null,"address_3":null,"city":"San Diego","state_province":"California","postal_code":"92127-1649","country":"United States","longitude":-117.08575,"latitude":33.02391,"phone":"8586182463","website_url":"http:\/\/abnormalbeer.co","state":"California","street":"16990 Via Tazon Ste 123"}]`;

const sanDiegoObj = JSON.parse(sanDiegoJSON);
// console.log(sanDiegoObj)
showBreweryName(sanDiegoObj)