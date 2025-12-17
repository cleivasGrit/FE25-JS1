// import { logHej, message } from "./modules/module1.js";
// logHej();
// console.log(message)

import { getDogImages } from "./modules/dogapi.js";
import { displayError, displayImages } from "./modules/display.js";

const form = document.querySelector('form');

form.addEventListener('submit', event => {
    event.preventDefault();

    const breed = document.querySelector('#breed').value.toLowerCase();
    const amount = document.querySelector('#amount').value;

    // console.log(breed, amount);
    getDogImages(breed, amount)
        .then( displayImages )
        .catch( displayError );
})