// varannan
// Skapa en array med valfritt innehåll. Arrayen ska ha minst 9 värden. 
// Skriv ut alla värdena i DOM:en (valfritt html-element, ett html-element per array-element.)
// Ge en valfri border till vartannat element. 
// Sätt textstorleken på de element som inte har en border till större än default. 

const arr = [4, 2, 43, 324, 21, 54, 76, 9, 32];

for(let i = 0; i<arr.length; i++){
    const pEl = document.createElement('p');
    pEl.innerText = arr[i];

    document.body.append(pEl);

    // Standard att vi byter stil genom att lägga till eller ta bort klasser, rule of separation 
    if(i%2 === 0){
        pEl.classList.add('border');
    }

    // Undantaget är om vi genererar styling utifrån något värde
    pEl.style.backgroundColor = `hsl(${arr[i]}, 80%, 80%)`
}