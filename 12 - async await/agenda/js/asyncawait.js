async function func(){
    return 10;
}

const result = func();

// console.log(result);
// func().then( x => console.log(x));



async function getDogImage(breed){
    try{    
        const url = `https://dog.ceo/api/breed/${breed}/images/random`;
        console.log(url);

        const response = await fetch(url);
        console.log(response);

        if(!response.ok){
            throw 'Error';
        }

        const data = await response.json();
        console.log(data);

        return data.message;
    }
    catch(error){
        throw error;
    }
}

function displayDogImage(imgURL){
    const errorEl = document.querySelector("#error");
    errorEl.innerText = '';

    const img = document.querySelector('img');
    img.src = imgURL;
}

function displayError(error){
    const errorEl = document.querySelector("#error");
    errorEl.innerText = error;
}

// console.log('först')

// getDogImage('hound').then( displayDogImage);

// console.log('sist');

const form = document.querySelector('form');

form.addEventListener('submit', event=>{
    event.preventDefault();

    const breed = document.querySelector('input').value;

    getDogImage(breed)
        .then( displayDogImage )
        .catch( displayError );

})