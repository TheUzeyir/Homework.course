let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');


openShopping.addEventListener('click', () => {
    body.classList.add('active');
});

closeShopping.addEventListener('click', () => {
    body.classList.remove('active');
});

fetch('https://dummyjson.com/products')
    .then((res) => res.json())
    .then((fetchedData) => {
        data = fetchedData;
        initApp(data);
    });

let listCards = [];

function initApp(data) {
    data.products.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
        <img src="${value.thumbnail}"/>
        <div class="title">${value.title}</div>
        <div class="price">${value.price.toLocaleString()}&#8380</div>
        <button class="addToCardBtn">
        <i class="card_btn_icon fa-solid fa-cart-shopping"></i>Add To Cart
        </button>
        `;

        newDiv.querySelector('.addToCardBtn').addEventListener('click', () => {
            addToCard(key);
        });

        list.appendChild(newDiv);
    });
}


function addToCard(key) {
    if (listCards[key] == null) {
        listCards[key] = data.products[key];
        listCards[key].quantity = 1;
    }
    reloadCard();
}


function reloadCard() {
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;

    listCards.forEach((value, key) => {
        if (value != null) {
            totalPrice = totalPrice + data.products[key].price * value.quantity;
            count = count + value.quantity;

            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="${value.thumbnail}"/></div>
                <div>${value.title}</div>
                <div>${(data.products[key].price * value.quantity).toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key},${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key},${value.quantity + 1})">+</button>
                </div>
            `;
            listCard.appendChild(newDiv);
        }
    });

    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}


function changeQuantity(key, quantity) {
    if (quantity == 0) {
        delete listCards[key];
    } else {
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * data.products[key].price;
    }
    reloadCard();
}

{/* <div class="description">${value.description}</div> */}
