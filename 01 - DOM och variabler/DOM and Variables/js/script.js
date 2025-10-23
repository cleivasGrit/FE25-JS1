console.log('test');


console.log( document.querySelector('a')  );

console.log(  document.querySelector('.logo') );

console.log( document.querySelectorAll('a') );

console.log( document.querySelectorAll('a')[0] );

console.log( document.querySelectorAll('a')[2] );


// Ändra textinnehåll
document.querySelector('h2').innerText = "FE25";

// Ändra HTML-innehåll
document.querySelectorAll('article')[1].innerHTML = '<h1>Nytt h1</h1>';

// Ändra inline css styling
document.querySelector('a').style.backgroundColor = 'hotpink';
document.querySelectorAll('article')[1].style.border = '5px solid limegreen';
document.querySelectorAll('article')[1].style.backgroundColor = 'red';

// Ändra på ett attributs värde
document.querySelector('img').src = "https://cdn.mos.cms.futurecdn.net/KG7kYHyteTset4EW6MqxV-650-80.jpg";

// Lägg tll och ta bort en klass
document.querySelectorAll('a')[1].classList.add('active');
document.querySelectorAll('a')[1].classList.remove('active');


// Med variabler
const firstLinkEl = document.querySelector('a');
console.log('variabel:', firstLinkEl);

const newText = 'Ny text';
firstLinkEl.innerText = newText;

// Ta bort ett element från DOM:en
firstLinkEl.remove();

// Skapa och lägga till ett element till DOM:en
const secondArticle = document.querySelectorAll('article')[1]; //Hämta elementet som ska vara parent-elementet
console.log(secondArticle)

const pEl = document.createElement('p'); //Skapa ett p-element
secondArticle.appendChild(pEl); //Lägg till p-elementet till article-elementet
pEl.innerText = 'Slut på genomgång!' //Lägg till textinnehåll