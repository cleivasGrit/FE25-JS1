const btnContainer = document.querySelector("#btnContainer");

btnContainer.addEventListener('click', checkBtn );

function checkBtn(event){
    // console.log(event.target.tagName);
    console.log('target: ', event.target, 'currentTarget: ', event.currentTarget)

    if(event.target.tagName === 'BUTTON'){
        console.log( event.target.innerText )
    }
}