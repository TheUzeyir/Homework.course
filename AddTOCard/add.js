let bag=document.querySelector('.header_bags')
let bag_btn=document.querySelector('.bag_btn')
let active=document.querySelector('.active')
let bag_number=document.querySelector('.header_bags_number')
let card_Btn=document.querySelectorAll('.card_btn')

bag.addEventListener('click',()=>{
  active.classList.toggle('active')
})

bag_btn.addEventListener('click',()=>{
  active.classList.toggle('active')
})


fetch('https://dummyjson.com/products')
  .then((res) => res.json())
  .then((data) => showData(data));

  let list=[]

  function showData(data) {
    let cards = document.querySelector('.cards');
    cards.innerHTML = '';
  
    data.products.forEach((product) => {
      let card = document.createElement('div');
      card.classList.add('card');
      card.dataset.id = product.id;
      card.innerHTML = `
        <img src="${product.thumbnail}" class="card_img">
        <p class="card_text">${product.title} - ${product.description}</p>
        <p class="card_price">${product.price}&#8380</p>
        <button class="card_btn">
          <i class="card_btn_icon fa-solid fa-cart-shopping"></i>Add To Cart
        </button>
      `;
      cards.appendChild(card);
    });
  }
  

function bagData(value) {
  let bag_container = document.querySelector('.bag_container');
  bag_container.innerHTML = ''; 

  value.products.map((product) => {
    bag_container.innerHTML+=`
    <div class="bag_product">
    <img src="${product.thumbnail}" alt="">
    <div class="bag_product_text">
        <p class="bag_product_text_information">${product.title}</p>
        <p class="bag_product_text_price">${product.price} &#8380;</p> 
        
        <div class="bag_product_buybox">
            <i class="bag_product_buybox_icon fa-solid fa-minus"></i>
            <p class="bag_product_buybox-number">1</p>
            <i class="bag_product_buybox_icon fa-solid fa-plus"></i>
        </div>
    </div>
    <i class="bag_product_trash-icon fa-solid fa-trash"></i>
  </div>
  `
  });
}

let cards = document.querySelectorAll('.cards');

function displayId() {
cards.forEach(card => {
  card.addEventListener('click', (event) => {
    let positionClick = event.target;
    if (positionClick.classList.contains('card_btn')) {
      let product_id=positionClick.parentElement.dataset.id;
;
      if (product_id==showData.id) {
        console.log('salam');
      }
    }
  });
});
}
displayId();



// let openShopping = document.querySelector('.header_bags');
// let closeShopping = document.querySelector('.closeShopping');
// let list = document.querySelector('.list');
// let listCard = document.querySelector('.listCard');
// let body = document.querySelector('body');
// let total = document.querySelector('.total');
// let quantity = document.querySelector('.quantity');


// openShopping.addEventListener('click', () => {
//     body.classList.add('active');
// });

// closeShopping.addEventListener('click', () => {
//     body.classList.remove('active');
// });

// fetch('https://dummyjson.com/products')
//     .then((res) => res.json())
//     .then((fetchedData) => {
//         data = fetchedData;
//         initApp(data);
//     });

// let listCards = [];

// function initApp(data) {
//     data.products.forEach((value, key) => {
//         let newDiv = document.createElement('div');
//         newDiv.classList.add('item');
//         newDiv.innerHTML = `
//         <img src="${value.thumbnail}"/>
//         <div class="title">${value.title}</div>
//         <div class="price">${value.price.toLocaleString()}</div>
//         <button onclick="addToCard(${key})">Add To Card</button>
//         `;
//         list.appendChild(newDiv);
//     });
// }

// function addToCard(key) {
//     if (listCards[key] == null) {
//         listCards[key] = data.products[key];
//         listCards[key].quantity = 1;
//     }
//     reloadCard();
// }


// function reloadCard() {
//     listCard.innerHTML = '';
//     let count = 0;
//     let totalPrice = 0;

//     listCards.forEach((value, key) => {
//         if (value != null) {
//             totalPrice = totalPrice + data.products[key].price * value.quantity; // Fix this line
//             count = count + value.quantity;

//             let newDiv = document.createElement('li');
//             newDiv.innerHTML = `
//                 <div><img src="${value.thumbnail}"/></div>
//                 <div>${value.title}</div>
//                 <div>${(data.products[key].price * value.quantity).toLocaleString()}</div> <!-- Fix this line -->
//                 <div>
//                     <button onclick="changeQuantity(${key},${value.quantity - 1})">-</button>
//                     <div class="count">${value.quantity}</div>
//                     <button onclick="changeQuantity(${key},${value.quantity + 1})">+</button>
//                 </div>
//             `;
//             listCard.appendChild(newDiv);
//         }
//     });

//     total.innerText = totalPrice.toLocaleString();
//     quantity.innerText = count;
// }


// function changeQuantity(key, quantity) {
//     if (quantity == 0) {
//         delete listCards[key];
//     } else {
//         listCards[key].quantity = quantity;
//         listCards[key].price = quantity * data.products[key].price;
//     }
//     reloadCard();
// }
