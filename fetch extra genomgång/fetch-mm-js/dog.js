const form = document.querySelector('form');

form.addEventListener('submit', event => {
    event.preventDefault();

    const breed = document.querySelector('#breed').value;
    const amount = document.querySelector('#amount').value;

    // console.log(breed, amount);
    getDogImages(breed, amount)
        .then( displayImages )
        .catch( displayError );
})


function displayError(error){
    console.log(error.message)

    const imgWrapper = document.querySelector('#imageWrapper');
    imgWrapper.innerHTML = '';

    const errorEl = document.querySelector('#error');
    errorEl.innerText = error;
}

function displayImages(imgURLs){
    // console.log(imgURLs)
    const errorEl = document.querySelector('#error');
    const imgWrapper = document.querySelector('#imageWrapper');

    errorEl.innerText = '';
    imgWrapper.innerHTML = '';

    for(const imgURL of imgURLs){
        // console.log(imgURL);
        const imgEl = document.createElement('img');
        imgEl.src = imgURL;
        imgWrapper.append(imgEl);
    }
}


async function getDogImages(breed, amount){
    const url = `https://dog.ceo/api/breed/${breed}/images/random/${amount}`

    try{    
        const response = await fetch(url);
      
        if(!response.ok){
            if(response.status === 404) throw 'Breed does not exist. Check your spelling.'
            else throw 'Something went wrong. Try again later.'
        }

        const value = await response.json();
        return value.message;

    }
    catch(error){
        throw error;
    }
}