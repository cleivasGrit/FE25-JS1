const clickMeBtn = document.querySelector('#clickMe');
// console.log(clickMeBtn)

clickMeBtn.addEventListener('click', firstResponse );


function firstResponse(event){
    console.log('Klickat!');
    console.log(event);
    console.log(event.target);
}

// Ett två tre knappar
const numberBtns = document.querySelectorAll('div button');

numberBtns[0].addEventListener('click', logText);
numberBtns[1].addEventListener('click', logText);
numberBtns[2].addEventListener('click', logText);

// numberBtns[0].innerText
const h1 = document.querySelector('div h1');

function logText(event){
    // event.target = knappen, dvs dom-elementet som det klickades på. 
    // event.target.innerText = knappens text
    console.log(event.target.innerText);
    h1.innerText = event.target.innerText;
}

// mouseenter
const colorDiv = document.querySelector('#colorDiv');

colorDiv.addEventListener('mouseenter', function(){
    colorDiv.style.backgroundColor = 'purple';
    h1.innerText = 'mouseenter';
})
colorDiv.addEventListener('mouseleave', function(){
    colorDiv.style.backgroundColor = 'aqua';
    h1.innerText = 'mouseleave';
})

// mousemove
document.body.addEventListener('mousemove', event => {
    console.log(event);
    document.body.style.backgroundColor = `hsl(${event.clientX}, 80%, 80%)`
});