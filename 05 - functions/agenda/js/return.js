function add(x, y){
    return x+y;
}

add(10, 5);

console.log( add(10, 5)  );

const sum = add(6, 3);
console.log(sum);

console.log( `Summan av 4 och 8 är ${ add(4, 8) } ` );

// en funktion som tar emot ett argument, skapar ett element med argumentet som innerText, och returnerar det elementet

function createEl(text){
    const pEl = document.createElement('p');
    pEl.innerText = text;
    return pEl;
}

const returnedPEl = createEl('undrar vad som kommer hända');

console.log(returnedPEl);
document.body.appendChild(returnedPEl);


// definiera en funktion som har två parametrar och returnerar det ena gånger det andra (Argumenten behöver vara nummer) (eventuellt produkten?)

function multiply(x, y){
    return x*y;
}
console.log( multiply(10, 2) )

// Definiera en funktion som inte har några parametrar och som returnerar summan av alla argument. (Argumenten behöver vara nummer)

function getSum(){
    console.log(arguments)
    let sum2 = 0;
    
    for(const num of arguments){
        sum2+=num;
        console.log('sum i loopen: ', sum2);
    }
    return sum2;
}

console.log( getSum(10, 20, 30 ))