for (let i = 0; i < 10; i++) {
    console.log(i + 1);
}

for (let i = 10; i > 0; i--) {
    console.log(i)
}
console.log('----------')
// med en for-loop logga 2, 4, 6, 8, 10, 12

for (let i = 2; i < 14; i += 2) {
    console.log(i)
}

// Skapa 5 h1-element med texten 1 till 5

// let h1 = document.createElement('h1');
// document.body.appendChild(h1);
// h1.innerText = 1;

// h1 = document.createElement('h1');
// document.body.appendChild(h1);
// h1.innerText = 2;

// h1 = document.createElement('h1');
// document.body.appendChild(h1);
// h1.innerText = 3;

for (let i = 0; i < 5; i++) {
    const h1 = document.createElement('h1');
    document.body.appendChild(h1);
    // Ändra så att du använder template literal istället 
    h1.innerText = `Element ${i+1} i ordningen`;
    // 'Element ' + (i+1) + ' i ordningen';
}
// Ger error eftersom variabeln endast existerar i for-loopen
// console.log(h1);

const allH1 = document.querySelectorAll('h1');
console.log(allH1);

// allH1[0].style.backgroundColor = 'skyblue';
// allH1[1].style.backgroundColor = 'skyblue';
// allH1[2].style.backgroundColor = 'skyblue';

for(let i=0; i<5; i++){
    allH1[i].style.backgroundColor = 'skyblue';
}