export function displayError(error){
    console.log(error.message)

    const imgWrapper = document.querySelector('#imageWrapper');
    imgWrapper.innerHTML = '';

    const errorEl = document.querySelector('#error');
    errorEl.innerText = error;
}

export function displayImages(imgURLs){
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