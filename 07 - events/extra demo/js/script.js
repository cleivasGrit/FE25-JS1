// Modal
const modalBtn = document.querySelector('#modalBtn');
const closeBtn = document.querySelector('#closeBtn');
const modal = document.querySelector('#modal');

modalBtn.addEventListener('click', ()=>{
    modal.style.display = 'flex';
})

closeBtn.addEventListener('click', ()=>{
    modal.style.display = 'none';
})

// Scroll progress bar
const progressBar = document.querySelector('#scrollProgress');
const scroll100 = document.querySelector("#scroll100");

window.addEventListener('scroll', ()=>{
    const scrollTop = document.documentElement.scrollTop; //positionen av toppen på sidan, i px
    const docHeight = document.documentElement.scrollHeight; //sidans hela höjd i px
    const winHeight = window.innerHeight; //höjden på the view port i px

    const scrollPercent = (scrollTop / (docHeight - winHeight)) * 100; //Hur många procent av sidan som användaren har skrollat ner

    progressBar.style.width = scrollPercent+'%';
    progressBar.style.backgroundColor = `hsl(160, ${scrollPercent}%, 70%)`


    if(scrollPercent>=100){
        scroll100.style.transform = 'scale(5)';
    }

})

// Custom cursor
const cursor = document.querySelector('#cursor');
document.body.addEventListener('mousemove', event =>{

    cursor.style.top = event.clientY+'px';
    cursor.style.left = event.clientX+'px';
    cursor.style.backgroundColor = `hsl(${event.clientX/10}, 80%, 80%)`;
    cursor.style.border = `2px solid hsl(${event.clientX/10}, 80%, 60%)`;

    console.log(event)
})