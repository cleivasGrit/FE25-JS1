const arr = [9, 1, 2, 10, 23, 12, 3, 4];
console.log(arr);

arr.push(10);
arr.push({test: 10});
console.log(arr)

arr.pop();
console.log(arr)
console.log('-----------')


arr.forEach( (element, i, array) =>{
    console.log(element, i, array)
}  )


console.log('-----------')
// Du har hämtat 50 produkter från ett API
// Användaren vill endast se produkter som kostar mindre än 100 kr

const filteredArray = arr.filter( element =>{
    console.log(element, element > 10);
    return element > 10;
})

console.log(filteredArray);

console.log('-----------')
// Du har hämtat 50 produkter från ett API
// Användaren anger en rabattkod, du räknar ut rabatten på alla produkter

const mappedArr = arr.map( element =>{
    console.log(element, );
    return element*0.5;
})
console.log(mappedArr)