const random = Math.random();
const randomTen = random *10;
const flooredRandom = Math.floor(randomTen);
console.log(random, randomTen, flooredRandom)

// Math.floor( Math.random()*10)


const arr = ['Jenny', 'Bianca', 'Henrik', 'Mohammad'];

const randomIndex = Math.floor(  Math.random() * arr.length );

console.log( randomIndex, arr[randomIndex]);