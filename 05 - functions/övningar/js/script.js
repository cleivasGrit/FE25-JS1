// En funktion som tar grader i celsius som argument och returnerar grader i Fahrenheit. 
//  (°F) = (Celsius x 1.8) + 32 

function celsiusToFahrenheit(c){
    return (c*1.8) + 32;
}

let f = celsiusToFahrenheit(45);
console.log(f);
f = celsiusToFahrenheit(12);
console.log(f);

// DOM - 1 kvadrat

function createSquare(size, color){
    const div = document.createElement('div');
    document.body.appendChild(div);

    div.style.width = size+'px';
    div.style.height = size+'px';
    div.style.backgroundColor = color;
}

createSquare(20, 'red');
createSquare(100, 'skyblue');
createSquare(200, 'hotpink');