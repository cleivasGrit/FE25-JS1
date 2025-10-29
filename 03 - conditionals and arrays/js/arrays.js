const ostar = ['fetaost', 'cheddar', 'mozarella', 'mögelost', 'brie', 'halloumi'];

console.log(ostar);
console.log(ostar[1]);
console.log(ostar.length);

for(let i=0; i<ostar.length; i++){
    console.log(ostar[i]);
}

// Skapa en array med valfritt tema
// Loopa igenom arrayen och skapa ett h3-element per element i arrayen
// Och visa innehållet av varje array-element i ett h3-element

const cars = ['BMW', 'Nissan', 'Opel', 'Audi', 'Honda'];

for(let i=0; i<cars.length; i++){
    const h3 = document.createElement('h3');
    document.body.appendChild(h3);

    h3.innerText = cars[i];

    // Välj ut två element ex Honda och Opel
    // Se till att endast de två har blå textfärg
    // Alla andra ska ha röd textfärg
    // Använd if-statement
    
    if(cars[i] === 'Honda' || cars[i] ==='Opel'){
        h3.style.color = 'blue';
    }
    else{
        h3.style.color = 'red';
    }
}