async function getCategories(){
    const url = 'https://api.chucknorris.io/jokes/categories';

    try{
        const response = await fetch(url);
        console.log(response)
        if(!response.ok){
            throw "Something went wrong";
        }

        const categoryArray = await response.json();
        return categoryArray;
    }
    catch(error){
        console.log(error)
        throw error;
    }
}

function displayCategories(arr){
    const select = document.querySelector("#category");

    for(const category of arr){
        const option = document.createElement("option");
        option.innerText = category;
        option.value = category;
        select.append(option);
    }
}

function displayError(error){
    const h1Error = document.querySelector("#error");
    h1Error.innerText = error;
}

getCategories()
    .then( displayCategories )
    .catch( displayError );