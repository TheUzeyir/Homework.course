// "use strict";

// alert("Hello");
// [1, 2].forEach(alert);
//------------------------------------------------------------------

// const arr=[1,2,3];
// //push data sonuna elave edir
// arr.push("hello")  //sonuna nese elave edir
// arr.push({name:"azerbaijan"});
// arr.push("balaken");

// //evvele elave edir
// arr.unshift(7777)  //evvele elave edir
// arr.unshift('azer')  //evvele elave edir

// let str=arr.toString() //axirincini silir
// console.log(str);
// arr.shift()  //evvelkini silir

// // arr.concat()  //iki elementi birlesdirir

// // let str=arr.toString() // yaziya cevirir bunun ucun bir let-yaradib console.log=a elave etmek lazimdir


// console.log(arr)
// //------------------------------------------------------------------arr1ci hisse bitis

// const arr1=[1,12,123,1234,12345,123456];
// const arr2=[21,213,2134,21345,213456,2134567];

// let val1=arr1.slice(2,5) //neceden basdiyib neceye qeder kesim demekdir,hemin eded araligindakini saxlayir---indeksleme 1den badiyir
// let val2=arr2.splice(1,4) //neceden basdiyib necedene kesim deyir, bir reqem yazanda onnan oyanani kesir---indeksleme 1den badiyir

// console.log(val1)
// console.log(arr2,val2)

// let val=arr1.indexOf(1234)  //hansi elementi axtaririq onu gosterir---indeksleme 0dan baslayir olmayan reqem yazdiqda -1 verir

// let val=arr1.lastIndexOf(123456)  //en sonuncu hardadi onun sayini gosterir--indeksleme o-dan basliyir

// let val=arr1.includes(123)  //element icinde varsa true verir yoxdusa false verir

// let val=arr1.forEach((item)=> console.log(item))  //dovr eliyir orginal arraya toxunur callback qebul eleyen itemdir

// let val=arr1.map((x)=>console.log(x)) //dovr eliyir orginal arraya toxunmur,con.log-daki x-a *2 veya basqa reqem yazsaq ona vurur eyni mesele
// toplama veya cixmadada eynidi, yanina nese yazdiqda hamisina elave edir,NaN verir--sual undifined verir callback qebul eleyen itemdir

// let val=arr1.filter((item)=>item>25) //filter eliyir callback qebul eleyen itemdir  bir cox datani bize gosterir

// let val=arr1.find((item)=>item===1234) //axtarib tapir elementi,eger yoxdusa undifined verir  olk cixan datani bize gosterir

// string-in icinde dinamik data isdifade etmek olur yeni string-in icine yazdigimiz her sey yazi kimi qebul edir amma 
// bunu yazannan sora string kimi qebul  etmir bunun ucun tildadan isdifade olunur `soz ${dinamik deyer}`-tilda isaresi 

// let val=arr1.length  //uzunlugunu gosterir

// let val=arr1.sort((x,y)=>x-y); 
//funksiyanin acilisi let val=arr1.sort(function(x,y){return x-y;});
//stringler ucun elifba sirasiyla duzur amma number ucun isdifade etsek bunun ucun callback gonderirik,
// funksiyada y-x yazdiqda azalan sirayla sort eliyir

// let val=arr1.some() //sertlerden her hansisa biri odenerse true qaytarir neticeni boleanla verir
// let val=arr1.every() //sertlerden hamisi odenerse true qaytarir neticeni boleanla verir

// let val=arr1.reduce((acc,curr)=>acc+curr,0)    //acc,curr normal addi biri birinci indeksi gooturur digeri ikinci birde data gelmese
//  veya string fala olarsa insual value verilir ki buda sonda ,0 olaraq qeyd edilir
// console.log(val)

// --------------------------------------------------------------OBYEKTLER---------
// let obj={} mes;
// let obj={
//         name: 'Luke Skywalker',
//         height: '172',
//         mass: '77',
//         eye_color: 'blue',
//         gender: 'male',
// }

// let keys=Object.keys(obj)       //obyektdekileri qutuya yigir arraya gecirir
// let values=Object.values(obj)    //obyektdeki valueleri qutuya yigir arraya gecirir
// let entries=Object.entries(obj)   //key ve valueleri bir yere yigir

// console.log(keys)   
// console.log(values) 
// console.log(entries)  

// ----------------------------- metods

// let metn="some young dream Country of America";

// let val=metn.toUpperCase(); //butun hamisini boyuk herfle yazir

// let val=metn.toLowerCase(); //hamisini balacayla yazir

// let val=metn.includes("dream");  //axtardigimiz metnin orda olub olmadigini gosterir bolean verir cavabda
// 
// let val=metn.indexOf("some") //axtardigimizin harda oldugunu gosterir ara bosluq sayiynan gosterir olmayandada -1deyir
//  herfi deyil sozu goturur indeksleme 0dan basliyir


// let val=metn.endsWith("America"); //sonunun neynen bitdiyine baxmaq ucun isdifade olunur sozu yaziriq bolean verir cavabda startwith eyni seydi

// let val=metn.trim()  //bas ve sondaki bosluqlari silir  basdakini ayrica silmek ucun trim.Start axirdakinda ise trim.End isdifade olunur
// 
// let val=metn.slice(17,25);  //kesmek demekdir hardan basdasin ve hara qeder kessin onu sorusur sozu deyil sozdeki herfi kesir menfi qebul 
// eliyir ve daha suretlidir
 
// let val=metn.substring(10,20); //kesmey demekdir sliceynen eynidi ancaq menfi qebul elemir

// let val=metn.concat(); //stringleri birlesdirir
 
// let val=metn.replace("some","every") //deyerdeki ilk yazdigimiz soznen ikinci yazdigimiz sozun yerini deyisir

// let val=metn.split("  ")


// console.log(val)
// ----------------------------- // ----------------------------- // ----------------------------- // ----------------------------- 

// console.log(val)

// const persons = [
//     {
//         name: 'Luke Skywalker',
//         height: '172',
//         mass: '177s',
//         eye_color: 'blue',
//         gender: 'male',
//     },
//     {
//         name: 'Darth Vader',
//         height: '202',
//         mass: '136',
//         eye_color: 'yellow',
//         gender: 'male',
//     },
//     {
//         name: 'Leia Organa',
//         height: '150',
//         mass: '49',
//         eye_color: 'brown',
//         gender: 'female',
//     },
//     {
//         name: 'Anakin Skywalker',
//         height: '188',
//         mass: '84',
//         eye_color: 'blue',
//         gender: 'male',
//     },
//   ];


//   let foundMass=persons.filter((item)=>Number(item.mass)>100)
//   console.log(foundMass)

//   let foundGender=persons.filter((item)=>item.gender==="male")
//   console.log(foundGender)


// let foundGender1=persons.every((gender)=>typeof gender==="male")
// console.log(foundGender1)

// const  filteredByEyecolor=persons.filter((item)=>item.eye_color==="blue");

// const longedData=filteredByEyecolor.map((i)=>`Adi-${i.name} cekisi-${i.height} cinsi-${i.gender}`)
// console.log(longedData)

// -----------------------------// ----------------------------- // ----------------------------- 

// ----------------------------------DOM=document object model---------------------------------------------

//read=oxumaq 

// let text=document.getElementById("azer") //id-ye gore getirir
// console.log(text)

// let paragraf=document.getElementsByClassName("string") //id birdenedi deye onu adi ,class cox ola biler deye arrayin icinde qaytarir
// console.log(paragraf)


// let word=document.getElementsByTagName("p")---------------------
// console.log(word)


// let yazmaq isdediyimiz ad=document.querySelector("deyerin parametri ve deyer") vs let yazmaq isdediyimiz ad=document.querySelectorAll("deyerin parametri ve deyer")
//umumi anlayisdii, bilmirki id-ye goremi yoxsa class-a goremi yoxsa tagin adina goremi axtaracam,adisi axtardigimiz ilk deyeri qaytaracaq All-olan ise hamisini arrayda

// let text=document.querySelector("#azer") //umumi anlayisdii, bilmirki id-ye goremi yoxsa class-a goremi yoxsa tagin adina goremi axtaracam
// console.log(text)

// let paragraf=document.querySelector(".string")  
// console.log(paragraf)

// let paragraf=document.querySelectorAll(".string")  
// console.log(paragraf)

// --------valueni deyismek
//bunun ucun evvelce elementi select elemek lazimdir 
// let text=document.querySelector("#azer")
// console.log(text)
// text.innerHTML="test"

// let text=document.querySelector("#azer")
// console.log(text)
// text.innerText="test"

// tagi cagirdiigimiz ad.innerHTML
// tagi cagirdiigimiz ad.innerText  //ikiside eyni isi gorur ancaq text ancaq yazini html ise hemde tag olaraq deyisir

// let text=document.querySelector("#azer")
// console.log(text)
// text.innerHTML="<p>test</p>"   ///tagi deyisdik p-eledik
// text.style.color="red"
// text.style.backgroundColor="red" //iki ve daha artiq sozden ibaretdirse bitisik ve ikincisi boyuk yazilir 

// let menu=document.querySelector(".menu")
// let item=document.createElement("li")
// menu.append(item)  //elave etmek ucun appent isdifade edirik ve elave etmek isdediyimiz classin adini yaziriq
// item.innerText="item 1" //liye soz elave elemek


// -------------------------------------task

//// 1 .// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:
// ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5"

// strings=["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]
// let findNeedle=strings.findIndex((name ) => name ==="needle");
// console.log(findNeedle)

// 2ci helli
// function findNeedle(array) {
//    return "found the needle at position"+array.indexOf("needle") 
// }
// findNeedle(Strings)




//2 Write a function that adds two arrays

// const arr1 = [1, 1, 1, 1];
// const arr2 = [2, 2, 2, 2];
// const arr3 = arr1.concat(arr2);

// // function concatArr(array){
// // return array.reduce((acc,curr)=>acc+curr,0)
// // }
// // console.log(concatArr(arr3))


// 3.Given a array of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting array.
// const numbers = [1,4,6,10,20,2]
// function getNewArray(numbers){
//     return numbers.map((num)=>{
//         if(num>5){
//             return 1
//         }
//         else{
//             return 0
//         }
//     })
// }
//daha qisasi
// function getNewArray(numbers){
//     return numbers.map((num)=>num>5 ?1:0)
// }
// console.log(getNewArray(numbers))



// 4.What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

// Example(Input --> Output)
// "apple ban" --> ["apple 5", "ban 3"]
// "you will win" -->["you 3", "will 4", "win 3"]

// const word="apple ban"
// function addLengthToWords(sentence) { 
//     let words = sentence.split(' '); 
//     let modifiedWords = words.map(word => word +' '+ word.length); 
//     return modifiedWords; 
//   } 
//   let sentence = "apple ban"; 
//   let result = addLengthToWords(sentence); 
//   console.log(result);
  


// 5.Write a function which calculates the average of the numbers in a given list.
// Note: Empty arrays should return 0.

// let number=[2,4,6]
// function getCalculate(numbers){
//     return numbers.reduce((acc,curr)=>(acc+curr)/number.length+1)
// }
// console.log(getCalculate(number))



// 6./Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []

// let number=[2,4,6]
// function changeNumber(numbers) {
//     return numbers.map(number => -number);
// }
// console.log(changeNumber(number))
// alert(window.innerHeight);


// let button=document.querySelector('.btn');
// button.addEventListener("click",()=>{
// let value=prompt()
// console.log(value);
// })

// const usernamebox=document.getElementById('username');
// usernamebox.addEventListener('focus',()=>{
    // usernamebox.style.backgroundColor='red';
// })
// usernamebox.addEventListener('blur',()=>{
    // usernamebox.style.backgroundColor='green';
// })
// 




// const clickBtn=document.querySelector('.btn1')
// const addTest=document.querySelector(".test")
// const closeBtn=document.querySelector('.active_icon')

// clickBtn.addEventListener(("click"),()=>{
// addTest.classList.toggle('active')
// })

// clickBtn.addEventListener(("click"),()=>{
// addTest.classList.toggle('active')
// })



// const obj={
//     fullNAme:'rakif',
//     age:34,
//     position:'front'
// }

// const{fullNAme,age,position}=obj    //qisaltma yazilis
// console.log(age,fullNAme,position)  //qisaltma yazilis davami



// function Employee(fullNAme,age,position){
//     this.fullName=fullNAme;
//     this.age=age
//     this.position=position
//     //this o demekdirki employeenin icinde colden gellen deyeri menimsedirik ilk fullNAme-ni adini isdediyimiz kimi qoymaq olar
// }
// Employee.prototype.height=170;


// class car{
//     constructor(model,year,color){
//         this.model=model;
//         this.year=year
//         this.color=color
//     }
// }
// class HR extends car{
//     constructor(model,year,color,height){
//         super(model,year,color)
//         this.height=height
//     }
// }



// let emp1=new Employee('uzeyir',20,'frontend')
// console.log(emp1);

//yeni employee deye bir funksiya yaradiriq button yaradqigimiz yerde click-in yanindaki funksiyaya arraya elave edirib push edirik hemin o table
//filderini arrayi foreach eleyim ve tabenin icine yerlesdirim
 
// const obj1={
//     fullNAme:'uzeyir',
//     age:34,
//     position:'front'
// }

// const obj2={
//     ...obj1,
//     l_name:'amil',
//     fincode:58,
//     learn:'back'
// }


// let arr2=['amil','coni','ruslan','uzeyir']
// let arr=[1,3,5,7,88451,obj2,...arr2]

// console.log(arr) 





// const persons = [
//     {
//         name: 'Luke Skywalker',
//         height: '172',
//         mass: '77',
//         eye_color: 'blue',
//         gender: 'male',
//     },
//     {
//         name: 'Darth Vader',
//         height: '202',
//         mass: '136',
//         eye_color: 'yellow',
//         gender: 'male',
//     },
//     {
//         name: 'Leia Organa',
//         height: '150',
//         mass: '49',
//         eye_color: 'brown',
//         gender: 'female',
//     },
//     {
//         name: 'Anakin Skywalker',
//         height: '188',
//         mass: '84',
//         eye_color: 'blue',
//         gender: 'male',
//     },
//   ];
//map 3,4   sort3



let fruit=['armud','heyva','nar','kelem','xiyar','badumcan']

function getName(){
    let fruits=''
    for (let i = 0; i < fruit.length; i++) {
        fruits+=fruit[i]+' '
    }
    return fruits
}
console.log(getName());