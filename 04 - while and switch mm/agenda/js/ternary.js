const isHungry = true;
const activity = isHungry ? 'Eat something' : 'Go for a walk';

console.log(activity);

const numbers = [2, 4, 23, 543, 23, 76, 3];

for(const number of numbers){
    const pEl = document.createElement('p');
    document.body.appendChild(pEl);
    pEl.innerText = number;

    // Eftersom vi endast har två alternativ
    const bgColor = number%2 === 0 ? 'lightcoral' : 'limegreen';


    // let bgColor;
    // if(number%2===1) bgColor = 'limegreen';
    // else bgColor = 'lightCoral';

    pEl.style.backgroundColor = bgColor;
}