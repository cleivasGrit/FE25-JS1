// Övning 2 - lista
let lista = document.createElement('ol');
document.body.appendChild(lista);

for(let i=0; i<10; i++){
    let liElement = document.createElement('li');
    liElement.innerText = "cat " +i;
    lista.appendChild(liElement);
}

// övning 3 - border
const listItems = document.querySelectorAll('li');

for(let i=0; i<10; i++){
    listItems[i].style.border = `${i+1}px solid skyblue`;
}


// skapa 5 numrerade listor med 3 punkter i varje
for(let i=0; i<5; i++){
    const olEl = document.createElement('ol');
    document.body.appendChild(olEl);

    for(let j=0; j<3; j++ ){
        const listItem = document.createElement('li');
        olEl.appendChild(listItem);

        console.log(i, j);
    }
}