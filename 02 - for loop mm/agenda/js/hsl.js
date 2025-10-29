// const h1 = document.querySelector('h1');
// h1.style.backgroundColor = 'hsl(180, 80%, 80%)';

for(let i=0; i<100; i++){
    const h1 = document.createElement('h1');
    document.body.appendChild(h1);
    h1.innerText = i;
    
    const hue = 90+i*10;

    h1.style.backgroundColor = `hsl(${hue}, 80%, 90%)`;

    console.log(hue);
}