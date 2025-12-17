const url = 'https://dog.ceo/api/breeds/image/random';

async function myAsync() {
    try{
        const response = await fetch(url);
        // console.log(response);

        if(response.ok){
            const value = await response.json();
            // console.log(value)
            return value;
        }
        else{
            throw 'something went wrong'
        }
        
    }
    catch(error){
        throw error;
    }
}

// console.log( myAsync() )

myAsync()
    .then(value => console.log(value))
    .catch(error => console.log(error))