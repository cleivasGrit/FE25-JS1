const x = 100000;
// Om flerajämförelser kommer vara sanna är ordningen på dina statements viktiga 

// if(x==10){
//     console.log('x är lika med tio')
// }
// else if(x<1000){
//     console.log('x är mindre än 1000')
// }

if(x<1000){
    console.log('x är mindre än 1000')
}
else if(x==10){
    console.log('x är lika med tio')
}
else {
    console.log('I alla andra fall')
}

for(let i =0; i<100; i++){
    // logga endast om i är mer än 35 och mindre än 38
    if(i>35 && i<38 ){
        console.log(i)
    }
    // Var femte nummer
    else if(i%5 == 0){
        console.log(i, 'jämnt')
    }
} 