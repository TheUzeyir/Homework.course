let bag=document.querySelector('.header_bags')
let active=document.querySelector('.active')
let bag_btn=document.querySelector('.bag_btn')
let bag_number=document.querySelector('.header_bags_number')
let card_AllBtn=document.querySelectorAll('.card_btn')

fetch('https://dummyjson.com/products')
  .then((res) => res.json())
  .then((data) => showData(data));

function showData(data) {
  let cards = document.querySelector('.cards');
  cards.innerHTML = ''; 

  data.products.forEach((product) => {
    cards.innerHTML += `
      <div class="card">
        <img src="${product.thumbnail}" class="card_img">
        <p class="card_text">${product.title} - ${product.description}</p>
        <p class="card_price">${product.price}&#8380</p>
        <button class="card_btn">
          <i class="card_btn_icon fa-solid fa-cart-shopping"></i>Add To Cart
        </button>
      </div> 
    `;
  });
}


bag.addEventListener('click',()=>{
  active.classList.toggle('active')
})

bag_btn.addEventListener('click',()=>{
  active.classList.toggle('active')
})



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



card_AllBtn.forEach((element)=>{
  
})