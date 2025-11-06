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


// Utmaningar - användarnamn
// OBS det finns smidigare lösningar med array-metoder som vi kommer gå igenom senare i kursen

const importantNames = ['Clara', 'Guido', 'Alrik'];
const names = ['Signe', 'Noura', 'Alrik', 'Elias', 'Maja', 'Trung', 'Dalya', 'Clara', 'Sergio', 'Bianca', 'Guido', 'Soraya'];


for(const name of names){
    const pEl = document.createElement('p');
    document.body.appendChild(pEl);
    pEl.innerText = name;
    pEl.className = 'notImportant'

    for(const importantName of importantNames){
        console.log(name, importantName);

        if(importantName === name) pEl.className = 'important';
    }
}