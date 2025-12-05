import { getCategories, getJoke } from "./chuckapi.js";
import { renderCategories, renderJoke } from "./gui.js";

const select = document.querySelector('#categorySelect');


async function app(){

    const categories = await getCategories();
    renderCategories(categories, select);

    select.addEventListener('change', async ()=>{
        const joke = await getJoke(select.value);
        renderJoke(joke);
    })
}

app();

// Default export 

import nyttNamn, {b, c} from './module2.js'

nyttNamn();
console.log(b, c);

// import { a } from "./module1.js";
// import { b, logModule2 } from "./module2.js";


// console.log(a)
// console.log(b)

// logModule2();