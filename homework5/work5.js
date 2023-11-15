const persons = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
      },
      {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
      },
    ];

    // Sort1
    // let checkMAss=persons.sort((a,b)=>Number(a.mass) - Number(b.mass))
    // console.log(checkMAss)
    

    // Sort2
    // let checkHeight=persons.sort((a,b)=>Number(a.height)-Number(b.height))
    // console.log(checkHeight)
    
    // Sort3
    // console.log(persons.sort((a,b)=>a.name.localeCompare(b.name)))


    // Sort4
    // let sortGender=persons.sort((a,b)=>{
    //   if(a.gender>b.gender){
    //     return 1;
    //   }

    //   if(a.gender<b.gender){
    //     return -1;
    //   }
    // })
    // console.log(sortGender)


    //Some1
// console.log((persons.some((item)=>item.gender>="male")))

  //Some2
// console.log(persons.some((item)=>item.eye_color>="blue"))

// Some3-----------------------------------------
// const checkLenght=persons.sort((a,b)=>a.name>b.name ? 1 : -1)
// console.log(checkLenght)

// Some4
// console.log( persons.some((item)=>item.mass<50))




//Every1
// console.log(persons.every((item)=>item.eye_color==="blue"))
  

  //Every2
// console.log(persons.every((item)=>item.mass>40))


  //Every3
// let textLenght=persons.every((item)=>item.height<200)
// console.log(textLenght)
  

  //Every4
// console.log(persons.every((item)=>item.gender==="male"))


//Map1
// console.log(persons.map((item)=>item.name))
  
//Map2
// console.log(persons.map((item)=>item.height))

//Map3
// console.log(persons.map(({ name, height }) => ({ [name]: height })))

//Map4
// let giveFirstName=persons.map((item)=>
// {
//   const fullName=item.name.split(" ")
//   return fullName[0]
// })
// console.log(giveFirstName)

  
//Filter1
// console.log(persons.filter((item)=>item.mass>100))

// Filter2 
// console.log(persons.filter((item)=>item.height<200))

// Filter3 
// console.log(persons.filter((item)=>item.gender==="male"))

// Filter4
// console.log(persons.filter((item)=>item.gender==="female"))




// ---------------------------------------------------------Part2------------------------------------------------------------------------------
// TASK1.1
// function greetUser(name){
//   console.log(`hello`+" "+name)
// }
// let name="Uzeyir"
// greetUser(name)


// TASK1.2
// function calculateArea(length,width){
//   let response;
//   if(width===0 && length===0) return0;

//   if(width===length){
//     response=`kvadratdir ve cemi ${width*4}`;
//   }
//   else{
//     response =`${(width+length)*2}-duzbucaqlidir`
//   }
//   return response;
// }

// let num=calculateArea(20,50)
// console.log(num)




// TASK1.3
// function isEven(num){
//   if(num%2===0){
//     return "cutdur"
//   }
//   else{
//     return "tekdir"
//   }
// }
// let num=7;
// console.log(isEven(num))




//TASK2.1
// let fruits=['banana','apple','ananas','avocado','cherry'];
// function displayFruits(){
//   let fruitNames=""
//   for (let i=0; i<fruits.length;i++) {
//     fruitNames+=fruits[i] + " "
//   }
//   return fruitNames;
// }
// console.log(displayFruits())



//TASK2.2
// numberArr=[1,123,1234,12345,123456]
// let reserveNUmber=numberArr.sort((a,b)=>b-a)
// console.log(reserveNUmber)

// let stringArr=["America is the dream country of young people"]
// function reverseArray(arr){
// const reverseWord = arr.map((word)=>word.split(""))
// const test=reverseWord.map((item)=>item.reverse(item).join(""))
// return test
// }
// console.log(reverseArray(stringArr))

// function tersineCevir(stringArr) {
//     let reserveArr = "";
//     for (let i = stringArr.length - 1; i >= 0; i--) {
//       reserveArr += stringArr[i];
//     }
//     return reserveArr;
// }
// console.log(tersineCevir(stringArr))



//TASK2.3
// numbersArr=[1,2,3,4,5,6,7,8]
// let Arr=numbersArr.filter((item)=>item%2===0)
// console.log(Arr)

//TASK3.1
// let person={
//  name:'Uzeyir',
//  age:'20',
//  city:'Azerbaijan'
// }

// let displayPersonInfo=Object.keys(person)
// console.log(displayPersonInfo)


//TASK3.2
// let person={
//   name:'uzeyir',
//   surname:'mammadov',
//   haveBirthday:20,
// }

// function happyBrtihdays(obj){
// return `${obj.name}-${obj.surname}`
// }
// happyBrtihdays(person)


//TASK3.3
// let car={
//  make:'BMW',
//  model:'m5F90',
//  year:'2020'
// }

// let displayCarInfo=Object.entries(car)
// console.log(displayCarInfo)



//TASK4.1
// let numbers = [1, 2, 3, 4, 5];
// let squaredNumbers = numbers.map((num) => num ** 2);
// console.log(squaredNumbers);


//TASK4.2
// let strings = ["America", "Tokyo", "New-york", "Baku", "Mali","Fiji"];
// let longString = strings.filter((str) => str.length > 5);
// console.log(longString);


//TASK4.3
let prices = [10.99, 35.49, 23.67, 18.75];

function calculateTotal(price) {
  return price.reduce((acc, curr) => acc + curr, 0);
}

let totalPriice = calculateTotal(prices);
console.log(`Total cost  ${totalPriice.toFixed(2)}`);