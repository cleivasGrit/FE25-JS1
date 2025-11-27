const form = document.querySelector('form');

form.addEventListener('submit', handleSubmit );

function handleSubmit(event){
    event.preventDefault();

    const breed = document.querySelector('input').value;
    // console.log(breed);
    form.reset();

    const url = `https://dog.ceo/api/breed/${breed}/images/random`;
    // console.log(url);
    fetch(url)
        .then( handleResponse )
        .then( displayDogImage )
        .catch( handleError );
}

function handleResponse(response){
    // console.log(response);
    if(response.status >= 200 && response.status < 300){
        return response.json();
    }
    else if(response.status >= 400 && response.status < 500){
        throw 'The breed does not exist. Please check your spelling.';
    }
    else if(!response.ok){
        throw 'Something went wrong. Please try again later.';
    }
}

function displayDogImage(dogObj){
    // console.log(dogObj);

    const img = document.querySelector('#dogImage');
    document.body.append(img);
    img.src = dogObj.message;
}

function handleError(error){
    console.log(error);

    const h1 = document.querySelector('#errorMessage');
    h1.innerText = error;
}