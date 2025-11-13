let numberOfAttempts = 0;
let randomNumber = Math.ceil( Math.random()*100 );

const form = document.querySelector('form');
const restartBtn = document.querySelector('#restart');
const pFeedback = document.querySelector('#feedback');


form.addEventListener('submit', checkGuess );
restartBtn.addEventListener('click', restartGame);

function checkGuess(event){
    event.preventDefault();

    const guess = form.querySelector('input').value;
    numberOfAttempts++;

    if(guess < randomNumber){
        pFeedback.innerText = 'Fel, du gissadeför lågt.'
    }
    else if(guess > randomNumber){
        pFeedback.innerText = 'Fel, du gissadeför högt.'
    }
    else{
        pFeedback.innerText = `Grattis, du gissade ${randomNumber}! Du vann på ${numberOfAttempts } antal försök!`;
    }
    
    form.reset();
}


function restartGame(){
    randomNumber = Math.ceil( Math.random()*100 );
    numberOfAttempts = 0;
    pFeedback.innerText = `Spelet startades om.`;
}