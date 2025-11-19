// Primitiva datatyper
let a = 1;
let b = a;
console.log(a, b);
b = 9;
console.log(a, b);

// ickeprimitiva
const obj1 = {
    prop: 1,
}
const obj2 = obj1;

console.log(obj1, obj2)

obj2.prop = 9;
console.log(obj1, obj2)

// obj2 = 5;
console.log('Object.assign')

const clonedObj = {};
Object.assign(clonedObj, obj1);

console.log(clonedObj, obj1)
clonedObj.prop= 'TEST';
console.log(clonedObj, obj1)

// för övningsuppgifterna 
function logProp(obj){
    console.log(obj.prop)
}

logProp(clonedObj)
logProp(obj2)