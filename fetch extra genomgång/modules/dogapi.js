export async function getDogImages(breed, amount){
    const url = `https://dog.ceo/api/breed/${breed}/images/random/${amount}`

    try{    
        const response = await fetch(url);
      
        if(!response.ok){
            if(response.status === 404) throw 'Breed does not exist. Check your spelling.'
            else throw 'Something went wrong. Try again later.'
        }

        const value = await response.json();
        return value.message;

    }
    catch(error){
        throw error;
    }
}