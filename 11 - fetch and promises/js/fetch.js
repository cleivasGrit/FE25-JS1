const url = 'https://dog.ceo/api/breeds/image/random';

// 
// const requestPromise = fetch(url);

// console.log( requestPromise );

// const jsonPromise = requestPromise.then( 
//     function(responseObject){
//         console.log(responseObject)
//         // console.log(responseObject.json())
//         return responseObject.json();
//     }
// )

// console.log('jsonPromise:', jsonPromise);
// jsonPromise.then(
//     function(dogObj){
//         console.log(dogObj.message);
//     }
// )

// console.log('När händer detta?')

function handleResponse(response){
    return response.json();
}

function handleDogMessage(dogObj){
    console.log(dogObj);
    const img = document.createElement('img');
    document.body.append(img);
    img.src = dogObj.message;
}

fetch(url)
    .then( handleResponse )
    .then( handleDogMessage );