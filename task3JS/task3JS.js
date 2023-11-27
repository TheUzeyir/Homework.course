"use strict";
// ----------------------------------------------------------------PART1-----------------------------------------------------------------------

//--TASK1---
// let button=document.querySelector('.btn1');
// button.addEventListener('click',()=>{
// const changeBodyColor=document.querySelector('body')
// changeBodyColor.style.backgroundColor="red"
// })


//--TASK2---
// let button=document.querySelector('.btn1');
// button.addEventListener('click',()=>{
//     let currentNumber = parseInt(document.getElementById('number').innerHTML);
//     let newNumber = currentNumber + 1;
//     document.getElementById('number').innerHTML = newNumber;
// })


//--TASK3---
// let button=document.querySelector('.btn1');
// button.addEventListener('click',()=>{
// document.querySelector('.img').setAttribute("src","wall.jpg")
// })

// -----------------------------------------------------------------PART2---------------------------------------------------------------------

// Write program that will reverse string: 'Hello world' => 'dlrow olleH'    


//---TASK1--
// let str='Hello world'
// function getReverseStr(word){
//     let result=" "
//     for(let i=word.length-1; i>=0; i--){
//         result+=word[i]
//     }
//     return result
// }
// let result=getReverseStr(str)
// console.log(result);



//---TASK2--
// Write program to repeat every character in string 3 times: 'Hello world' => 'HHHeeellllllooo wwwooorrrlllddd!!!'
    // let str='Hello word'
    // function getResult(word){
    //     let result=''
    //     for (let i = 0; i < word.length; i++) {
    //         for (let j = 0; j <3; j++) {                
    //             result+=word[i]
    //         }
    //     }
    //     return result
    // }
    // let result=getResult(str)
    // console.log(result)

//---TASK3--
// Write program to repeat given string n times: 'Hello world', 3 => 'Hello worldHello worldHello world'
// let str='Hello word'
// let repeatedString = "";
// for (let i = 0; i < 3; i++) {
//     repeatedString += str;
// }
// console.log(repeatedString);  


//---TASK4--
// Write program to find the first not repeated character: 'abacddbec' => 'e'
// let str='abacddbec';
// let empty='';
// let val=0
// function firstNotRepeatedChar(str) {
//     for (let i = 0; i < str.length; i++) {
//         val=0;
//         for (let index = 0; index < str.length; index++) {
//             if(val>1){
//                 empty=str[i]
//                 break
//             }         
//             if (str[i]===str[index]) {
//                 val+=1
//             }   
//         }        
//     }
// }
// firstNotRepeatedChar(str)
// console.log(empty)



//---TASK5--
// Write program to find the first repeated character: 'abacddbec' => 'a' 
// let str='abacddbec'
// let empty='';
// let val=0;
// function firstRepeatedChar(str) {
//     for(let i=0; i<str.length;i++){
//         val=0;
//         for (let index = 0; index < str.length; index++) {
//             if(str[i]===str[index]){
//                 val+=1
//             }
//             if (val>1) {
//                 empty=str[i];
//                 break;
//             }
//         }

//     }
// }
// firstRepeatedChar(str)
// console.log(empty)


//---TASK6--
// Write program to find the count of each character: 'abacddbec' => {a: 2, b: 2, c: 1, d: 3, e: 1}
let strings='abacddbec';
function countCharacters(strings) {
    let empty = {}
    for (let item of strings) {
      if (empty[item]) {
        empty[item]++;
      } else {
        empty[item] = 1;
      }
    }
  
    return empty;
  }
  const result = countCharacters(strings);
  console.log(result);


//---TASK7--
// Write program that truncates string in a given length: 'Hello world', 5 => 'Hello...'    
// let strings='Hello world';
// let maxLength=5;
// function truncateString(inputString, maxLength) {
//     if (inputString.length <= maxLength) {
//       return inputString;
//     } else {
//       let truncatedString = '';
//       for (let i = 0; i < maxLength; i++) {
//         truncatedString += inputString[i];
//       }
//       return truncatedString + '...';
//     }
//   }
// let truncatedString = truncateString(strings, maxLength);
// console.log(truncatedString);



//---TASK8--
// Write program that truncates string in a given length, but it should not break the word: 'Hello world, nice talking to you', 20 =>
// 'Hello world, nice...'

// let strings='Hello world, nice talking to you';
// let maxLength=17;
// function truncateString(inputString, maxLength) {
//     if (inputString.length <= maxLength) {
//       return inputString;
//     } else {
//       let truncatedString = '';
//       for (let i = 0; i < maxLength; i++) {
//         truncatedString += inputString[i];
//       }
//       return truncatedString + '...';
//     }
//   }
// let truncatedString = truncateString(strings, maxLength);
// console.log(truncatedString);



//---TASK9--
// Create a program to calculate the sum of the elements in an array of numbers: [1, 2, 3, 4, 5] => 15    
// let numbers=[1, 2, 3, 4, 5]
// let sum=0
//     for (let i = 0; i<numbers.length; i++) {
//         sum+=numbers[i]
//     }
// console.log(sum)


//---TASK10--
// let numbers=[1, 2, 3, 4, 5]
// let sum=0
// for (let i = 0; i < numbers.length; i++) {
//     sum+=numbers[i]
// }
// let calculateNumber=sum/numbers.length
// console.log(calculateNumber)


//---TASK11--
// Create a program to find the maximum number in an array of numbers: [1, 2, 3, 4, 5] => 5    
// function giveNumber(array){
//     let largeElement=array[0];
//     for (let i = 0; i < array.length; i++) {
//         if(array[i]>largeElement)
//         largeElement=array[i]
//     }
//     return largeElement
// }
// let numbers=giveNumber([1, 2, 3, 4, 5])
// console.log(numbers)



//---TASK12--
// Create a program to find the minimum number in an array of numbers: [1, 2, 3, 4, 5] => 1   
// function giveNumber(array){
//     let largeElement=array[0];
//     for (let i = 0; i < array.length; i++) {
//         if(array[i]<largeElement)
//         largeElement=array[i]
//     }
//     return largeElement
// }
// let numbers=giveNumber([1, 2, 3, 4, 5])
// console.log(numbers)



//---TASK13--
// Create a program to find the second largest number in an array of numbers: [1, 2, 3, 4, 5] => 4  
// function giveNumber(array){
//     let largeElement=array[0];
//     for (let i = 0; i < array.length-1; i++) {
//         if(array[i]>largeElement)
//         largeElement=array[i]
//     }
//     return largeElement
// }
// let numbers=giveNumber([1, 2, 3, 4, 5])
// console.log(numbers)


//---TASK14--
// Create a program to find the second smallest number in an array of numbers: [1, 2, 3, 4, 5] => 2    
// function giveNumber(array){
//     let largeElement=array[1];
//     for (let i = 1; i < array.length; i++) {
//         if(array[i]<largeElement)
//         largeElement=array[i]
//     }
//     return largeElement
// }
// let numbers=giveNumber([1, 2, 3, 4, 5])
// console.log(numbers)



//---TASK15--
// Create a program to find the count of each element in an array of numbers: [1, 2, 3, 4, 5, 1, 2, 3, 4, 5] => {1: 2, 2: 2, 3: 2, 4: 2, 5: 2}




//---TASK16--
// Create a program to find the sum of the odd numbers in an array of numbers: [1, 2, 3, 4, 5] => 9
// let numbers=[1, 2, 3, 4, 5]
// let val=0;
// for (let i = 0; i <numbers.length; i++) {
//     if (numbers[i]%2 !==0) {
//        val+=numbers[i]
//     }
// }
// console.log(` ${val}`)


//---TASK17
// Create a program to find the sum of the even numbers in an array of numbers: [1, 2, 3, 4, 5] => 
// let numbers=[1, 2, 3, 4, 5]
// let val=0;
// for (let i = 0; i <numbers.length; i++) {
//     if (numbers[i]%2 ===0) {
//        val+=numbers[i]
//     }
// }
// console.log(` ${val}`)
