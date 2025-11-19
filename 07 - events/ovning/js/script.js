const form = document.querySelector('form');

form.addEventListener('submit', addItem);

function addItem(event){
    event.preventDefault();

    const item = document.querySelector('#item').value;
    const amount = document.querySelector('#amount').value;

    const pEl = document.createElement('p');
    document.body.appendChild(pEl);
    pEl.innerText = `${amount} ${item}`;

    pEl.addEventListener('click', ()=>{ pEl.remove() });


    console.log(item, amount);
    form.reset();
}


// Mousemove
document.body.addEventListener('mousemove', changeColor);


function changeColor(event){
    // console.log(event.clientX, event.clientY);

    const saturation = (event.clientX/window.innerWidth)*100;
    const lightness = 100-(event.clientY/window.innerHeight)*100;
    console.log(lightness)
    
    document.body.style.backgroundColor = `hsl(271, ${saturation}%, ${lightness}% )`
}