const simpleForm = document.querySelector("#simpleForm");
simpleForm.addEventListener('submit', logInput);

function logInput(event){
    event.preventDefault(); //Gör så att browsern inte reloadar, vilket den annars gör som default
    // console.log('SUBMIT');

    // Textinputen
    const inputEl = simpleForm.querySelector('input');
    const color = inputEl.value;
    const colorDiv = document.querySelector('#colorDiv');
    colorDiv.style.backgroundColor = color;

    // Selectinputen
    const selectEl = simpleForm.querySelectorAll('select');
    const size = selectEl.value;
    console.log(inputEl.value, selectEl.value);

    // Ändra storlek på colorDiv till liten, medium eller stor beroende på värdet av select
    if(size === 's'){
        colorDiv.style.height = '100px'
    }
    else if(size === 'l'){
        colorDiv.style.height = '300px';
    }
    else if( size === 'm' ){
        colorDiv.style.height = '200px';
    }
    // Obs tänk på att en number input value är av datatyp string

    simpleForm.reset();
}
// Ändra färg på colorDiv till färgen som användaren anger i inputen