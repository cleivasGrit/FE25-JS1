const divs = document.querySelectorAll('div');

// Det går att reversa bubblandet så att det istället bubblar nedåt

divs[0].addEventListener('click', event =>{
    alert('Div 1');
})
divs[1].addEventListener('click', event =>{
    alert('Div 2');
})
divs[2].addEventListener('click', event =>{
    alert('Div 3');
    event.stopPropagation();
})
divs[3].addEventListener('click', event =>{
    alert('Div 4');
})
divs[4].addEventListener('click', event =>{
    alert('Div 5');
})