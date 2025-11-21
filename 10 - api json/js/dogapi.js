// Förfrågan skickades till https://dog.ceo/api/breeds/image/random/5 
const dogJson = `{"message":["https:\/\/images.dog.ceo\/breeds\/sheepdog-indian\/Himalayan_Sheepdog.jpg","https:\/\/images.dog.ceo\/breeds\/mountain-bernese\/n02107683_3568.jpg","https:\/\/images.dog.ceo\/breeds\/terrier-dandie\/n02096437_85.jpg","https:\/\/images.dog.ceo\/breeds\/mastiff-tibetan\/n02108551_4807.jpg","https:\/\/images.dog.ceo\/breeds\/boxer\/n02108089_9076.jpg"],"status":"success"}`;

const dogObj = JSON.parse(dogJson);
console.log(dogObj.message);
createImages(dogObj.message);


// hämta två random bilder av en labrador
const labradorJson = `{"message":["https:\/\/images.dog.ceo\/breeds\/labrador\/n02099712_3773.jpg","https:\/\/images.dog.ceo\/breeds\/labrador\/n02099712_7418.jpg"],"status":"success"}`

const labradorObj = JSON.parse(labradorJson);
createImages(labradorObj.message);


function createImages(dogURLArray){
    for(const imgURL of dogURLArray){
        console.log(imgURL);
        const img = document.createElement('img');
        document.body.appendChild(img);
        img.src = imgURL;
    }
}