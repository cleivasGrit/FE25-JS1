func1();

function func1(){
    console.log('func1');
}



const func2 = function(){
    console.log('func2');
}

func2();

console.log( func2 )
console.log( typeof func2 );

console.log( '------callback------');


function firstFunc(){
    console.log('I firstFunc')
}

function secondFunc(callback){
    console.log('i secondFunc');

    callback();
}

function thirdFunction(){
    console.log('thirdFunction');
}

// firstFunc();
// secondFunc( firstFunc );
// secondFunc( thirdFunction );


// För demo - higher order som returnerar en funktion 
function returningFunc(){

    function callback(){
        console.log('i callback-funktionen som returneras');
    }
    return callback;
}

// returningFunc()();
const returnedFunc = returningFunc();
returnedFunc();


// En array med nummer som vi vill utföra olika beräkningar på

const numbers = [3, 45, 23, 7, 43, 9, 5, 34];

function getDoubleArray(arr){
    const newArray = [];
    console.log(newArray)

    for(let i=0; i<arr.length; i++){
        newArray[i] = arr[i]*2;
    }

    return newArray;
}

const dArr = getDoubleArray(numbers);
console.log(dArr)


function getHalfArray(arr){
    const newArray = [];
    
    for(let i=0; i<arr.length; i++){
        newArray[i] = arr[i]/2;
    }
    
    return newArray;
}

const hArr = getHalfArray(numbers);
console.log(hArr);

console.log('----higher order lösning----')
// Skriver om lösningen med en higher-order och flera mindre funktioner som ska användas som callback

function doubleNum(x){
    return x*2;
}

function halfNum(x){
    return x/2;
}

function calcNumberArr(arr, calcFunc){
    const newArr = [];

    for(let i=0; i<arr.length; i++){
        newArr[i] = calcFunc( arr[i] );
    }
    return newArr;
}

const dNum2 =  calcNumberArr(numbers, doubleNum);
const hNum2 = calcNumberArr(numbers, halfNum);

console.log(dNum2)
console.log(hNum2)

console.log( calcNumberArr(numbers, function(x){ return x*x }) )

console.log( calcNumberArr(numbers, x=>x*x) )
