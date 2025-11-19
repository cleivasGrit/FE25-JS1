const products = [
    {
        name: 'Ballonger',
        price: 100,
        discount: 0.2,
        getDiscountedPrice(){
            return this.price * (1-this.discount);
        }
    },
    {
        name: 'Öl',
        price: 20,
        discount: 0,
        getDiscountedPrice(){
            return this.price * (1-this.discount);
        }
    },
    {
        name: 'Partyhatt',
        price: 10,
        discount: 0.5,
        getDiscountedPrice(){
            return this.price * (1-this.discount);
        }
    },
    {
        name: 'Flärpor',
        price: 100,
        discount: 0.3,
        getDiscountedPrice(){
            return this.price * (1-this.discount);
        }
    },
    {
        name: 'Godis',
        price: 200,
        discount: .2,
        getDiscountedPrice(){
            return this.price * (1-this.discount);
        }
    },
]

// console.log(products[0].getDiscountedPrice())

for(const product of products){
    console.log(product);

    const div = document.createElement('div');
    div.classList.add('product-card');
    document.body.appendChild(div);

    const nameEl = document.createElement('h1');
    const priceEl = document.createElement('p');
    const discountEl = document.createElement('p');
    div.append(nameEl, priceEl, discountEl);

    priceEl.classList.add('line-through')

    nameEl.innerText = product.name;
    priceEl.innerText = product.price + ' kr';
    discountEl.innerText = product.getDiscountedPrice() + ' kr';
}