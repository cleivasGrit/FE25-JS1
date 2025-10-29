let x = 10;
let y = 20;

console.log( x == y);

y = 10;
console.log( x == y);

x = '10';
console.log('==', x == y);
console.log('===', x === y);

console.log( '!=', x != y);

x=100;
console.log( '<', x < y);

// både y och x lika med 10
x=10;
console.log( '<', x < y);
console.log( '<', x <= y);

// Gör om en String till Number
// console.log(Number('2'))

console.log('-----Logical Operators------');
// endast ena jämförelsen är sann så hela resultatet blir falskt
console.log( 10 === 20 && 10 < 29 );

// Här räcker det med att det ena eller det andra är sant
console.log( 10 === 20 || 10 < 29 );

// 10 är inte mindre än tio, men med NOT blir det sant
console.log(!(10<10))


console.log( typeof 10 == typeof '10')
console.log( typeof 10, typeof '10')