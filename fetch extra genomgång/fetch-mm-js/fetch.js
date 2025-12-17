const url = 'https://dog.ceo/api/breeds/image/random';

// // console.log( fetch(url) )
// console.log('först')

// fetch( url )
//     .then( function(response){
//         console.log(response)
//         return response.json()
//     })
//     .then( function(value){
//         console.log('json promise fulfilled')
//         console.log(value)
//     })

// console.log('sist')

// btn.addEventlistener('click',  event =>{
    
// })

fetch(url)
    .then(response => {
        if(response.ok){
            return response.json();
        }
        else{
            throw 'Something went wrong';
        }
    })
    .then(value => console.log(value))
    .catch( error => console.log(error))
