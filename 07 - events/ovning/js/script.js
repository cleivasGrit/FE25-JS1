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