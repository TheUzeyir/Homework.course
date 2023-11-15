// verilen sozun eksini tapilmasi/----------------------
// function tersineCevir(yazi) {
//     let tersineSoz = "";
//     for (let i = yazi.length - 1; i >= 0; i--) {
//         tersineSoz += yazi[i];
//     }
//     return tersineSoz;
// }


// let yazi = "coni";
// let tersineSoz = tersineCevir(yazi);
// console.log(tersineSoz);

// 2 Never give up cumlesinde e herfinin nece defe isdifade olundugunu gozderen funksiya yaz

// function giveWord(searchWord) {
//     let find = "e";
//     let index = 0;
//     for (let i = 0; i < searchWord.length; i++) {
//         if (searchWord[i] === find) {
//             index++;
//         }
//     }
//     return index
// }

// let cumle = "Never give up";
// let herfSayi = giveWord(cumle);
// console.log(cumle + ' ' + herfSayi)


// const cars = [
//     {
//         color:"red",
//         type:"mercedes",
//         capasity:5,
//         price:20000,
//     },
//     {
//         color:"blue",
//         type:"bmw",
//         capasity:2,
//         price:15000,
//     },
//     {
//         color:"blue",
//         type:"ford",
//         capasity:6,
//         price:10000,
//     },
//     {
//         color:"blue",
//         type:"bmw",
//         capasity:6,
//         price:45000,
//     },
// ];

//  let carsSize = cars.map((car)=>{
// if(car.capasity <=3){
//     return `small car ${car.type}`
// }
// else if(car.capasity <=5){
//     return `medium car ${car.type}`;
// }
// else if(car.capasity<=9){
//     return `large car ${car.type} `;
// }
// })
// console.log(carsSize)


// .-------------------------------------------------------------------------------------

// const cars = [{
//         color: "red",
//         type: "mercedes",
//         capasity: 5,
//         price: 20000,
//     },
//     {
//         color: "blue",
//         type: "bmw",
//         capasity: 2,
//         price: 15000,
//     },
//     {
//         color: "blue",
//         type: "ford",
//         capasity: 6,
//         price: 10000,
//     },
//     {
//         color: "blue",
//         type: "bmw",
//         capasity: 6,
//         price: 45000,
//     },
// ];

// function applyDiscound(car) {
//     car.price *= 0.7
//     return car;
// }

// let foundDiscountPrice = cars.filter(function (car) {
//         return car.color === "red";
//     })
//     .map(applyDiscound);
// console.log(foundDiscountPrice)