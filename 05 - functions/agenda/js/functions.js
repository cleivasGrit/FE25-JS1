function logSomething(){
    console.log('Här loggas någonting');
}

logSomething();

function createH1(text){
    const h1 = document.createElement('h1');
    document.body.appendChild(h1);
    h1.innerText = text;
}

createH1('Första h1');
createH1('Ennu ett h1-element');
createH1('Ett tredje');


// Definiera en funktion som skapar och lägger till ett button-element
// Den ska ha två parametrar, en för innerText, en för bakgrundsfärgen

function createButton(text = 'Bonus', color = 'lightgreen'){
    const button = document.createElement('button');
    document.body.appendChild(button);
    button.innerText = text;
    button.style.backgroundColor = color;
}

createButton('klicka här', 'lightblue');
createButton('Spara!', 'coral');
createButton('Avbryt');

// Undefined innebär här att första arameterns defaultvärde används
createButton( undefined,'hotpink');


function logAllArguments(){
    console.log(arguments);

    for(const arg of arguments){
        console.log(arg)
    }
}
logAllArguments(1, 5, 32, 'hej');
logAllArguments(true, 10, true);

