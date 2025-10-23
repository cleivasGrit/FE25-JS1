const yearOfBirth = 1991;
let currentYear = 2025;
const age = currentYear-yearOfBirth;

console.log(yearOfBirth, currentYear, age);

currentYear = 2026;

console.log(currentYear);


const word = 'hej';
// Nedan är inte tillåtet eftersom en consts värde inte får bytas ut
// word = 'ord';

console.log( age+word);
console.log( age/word); //ger NaN, Not a Number