export const b = 'b';
export const c = 'c';

export default function logModule2(){
    console.log('Module 2');
    console.log(c)

    const h1 = document.createElement('h1');
    h1.innerText = c;
    document.body.append(h1);
}

